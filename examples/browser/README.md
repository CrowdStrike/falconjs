## Browser Examples

### Download Sensor Binary

A minimalist example to select and download CrowdStrike Falcon binary.

Read the source code

 - [sensor_download.ts](./sensor_download.ts)
 - [sensor_download.html](./sensor_download.html)

Build the example
```
npm run build:devel
NAME=sensor_download
./node_modules/esbuild/bin/esbuild --bundle ./examples/browser/${NAME}.ts --outfile=./examples/browser/${NAME}.js  --global-name=${NAME}
```

Run the example:
 - point your web browser to the html file
