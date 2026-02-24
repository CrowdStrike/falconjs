#!/bin/sh

set -euxo pipefail

VERSION=0.3.0 # Target version of FalconJS

ORIGINAL_SWAGGER=./specs/swagger.json
FINAL_SWAGGER=./specs/final.json

CONTAINER_TOOL=
if command -v docker >/dev/null 2>&1; then
   CONTAINER_TOOL="docker"
elif command -v podman >/dev/null 2>&1; then
   CONTAINER_TOOL="podman"
else
   echo "No container runtime tool found. Please install either Docker or Podman."
   exit 1
fi

if [ ! -f $ORIGINAL_SWAGGER ]; then
   echo "couldn't find $ORIGINAL_SWAGGER (you need to download it manually)"
   exit 1
fi

SPEC_VERSION=$(jq -r .info.version specs/swagger.json)

jq -f ./specs/transformation.jq $ORIGINAL_SWAGGER > $FINAL_SWAGGER
sed -f ./specs/transformation.sed -i '' $FINAL_SWAGGER

typ=typescript-fetch
build_dir="specs/out/$typ"
rm -rf "./$build_dir"

BUILD_CONTAINER="openapitools/openapi-generator-cli:v7.7.0"
$CONTAINER_TOOL pull "$BUILD_CONTAINER"

$CONTAINER_TOOL run --rm \
       -v "$PWD":/falcon-js "$BUILD_CONTAINER" generate \
       -i /falcon-js/$FINAL_SWAGGER \
       -g "${typ}" \
       -o "/falcon-js/$build_dir" \
       --additional-properties=httpUserAgent=falconjs/$VERSION \
       --additional-properties=packageName=falconjs \
       --additional-properties=packageVersion=$VERSION \
       --additional-properties=npmVersion=$VERSION \
       --additional-properties=disallowAdditionalPropertiesIfNotPresent=false \
       --additional-properties=useSingleRequestParameter=false \
       --additional-properties=prefixParameterInterfaces=true \
       --additional-properties=npmName=crowdstrike-falcon \
       --additional-properties=npmRepository=https://github.com/crowdstrike/falcon-js \
       --additional-properties=supportsES6=true \
       --additional-properties=typescriptThreePlus=true \
       --skip-validate-spec

# Remove all auto-generated files/directories so we start from a clean slate.
# This avoids case-sensitivity issues where cp on macOS won't update git's index
# for files that only differ in casing (e.g. FooJson.ts -> FooJSON.ts).
rm -rf src/apis/ src/models/
rm -f src/runtime.ts

# use the index.ts with all exports that we maintain, not just generated classes
rm ./${build_dir}/src/index.ts
cp -a ./${build_dir}/src/* ./src/

#TODO: populate client.ts with all API imports, class defs, and constructors

npm run format:fix
npm run lint:fix
npm run lint
npm run build

cat << EOF
✅ Rebuild complete. If everything looks good and you're ready to commit:
  git add src/
  git commit -m "Re-generate the codebase using swagger $SPEC_VERSION"
EOF
