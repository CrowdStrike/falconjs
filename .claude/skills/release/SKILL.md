---
name: release
description: Use when preparing a new FalconJS release — bumps version across all version-bearing files, runs pre-PR checks, and opens a release PR.
argument-hint: [version-bump: major | minor | patch]
allowed-tools: Read, Edit, Bash, Grep, Glob
---

<objective>
Prepare a FalconJS release by bumping the version across all version-bearing files, running the full pre-PR checklist, and opening a release PR. Follows the process documented in docs/devel.md.
</objective>

<quick_start>
Ask the user which version bump they need (major, minor, or patch) if not provided as an argument. Then execute the process below.
</quick_start>

<process>
## Step 1: Determine the version bump

If the user provided an argument (major, minor, or patch), use it. Otherwise ask:

> Which version bump do you need?
> - **major** — breaking changes (post-1.0) or significant pre-1.0 milestones
> - **minor** — breaking changes (pre-1.0) or new features (post-1.0)
> - **patch** — bug fixes and maintenance

Read `package.json` to get the current version. Compute the target version.

## Step 2: Verify clean working tree

Run `git status` and confirm there are no uncommitted changes. If the tree is dirty, stop and ask the user to resolve before continuing.

## Step 3: Create the release branch

Branch explicitly from `main`:

```bash
git checkout -b prepare-{TARGET_VERSION} main
```

## Step 4: Bump version in all version-bearing files

Three locations need updating — do **all three**:

1. **`rebuild.sh`** — find the `VERSION=` line and change it to `VERSION={TARGET}`
2. **`src/middleware/useragent.ts`** — find the `"User-Agent": "falconjs/..."` string and update to `"falconjs/{TARGET}"`
3. **`package.json` + `package-lock.json`** — via:
   ```bash
   npm version {major|minor|patch} --no-git-tag-version
   ```
   Use `--no-git-tag-version` so npm does not auto-commit or auto-tag.

## Step 5: Run the pre-PR checklist

Run each command in order. All must succeed before proceeding:

```bash
npm run format:fix
npm run lint:fix
npm run lint          # Must produce no errors
npm run build         # Must succeed
```

## Step 6: Verify version consistency

Confirm the target version appears in all three files:

```bash
grep "0.x.y" rebuild.sh src/middleware/useragent.ts package.json
```

All three must show the new version.

## Step 7: Commit

Stage only the version-related files and commit:

```bash
git add rebuild.sh src/middleware/useragent.ts package.json package-lock.json
git commit -m "chore: bump version to {TARGET}"
```

## Step 8: Push and create PR

```bash
git push -u origin prepare-{TARGET}
```

Create a PR targeting `main`. The PR description should:
- State which files were bumped and to what version
- Summarize the notable changes since the last release (reference merged PRs)

Remind the user: after merge, create a GitHub release on `main`.
</process>

<success_criteria>
Release preparation is complete when:
- [ ] Working tree was clean before starting
- [ ] Release branch `prepare-{TARGET}` created from `main`
- [ ] `rebuild.sh` contains the new version
- [ ] `src/middleware/useragent.ts` contains the new version
- [ ] `package.json` and `package-lock.json` contain the new version
- [ ] `npm run lint` produces no errors
- [ ] `npm run build` succeeds
- [ ] All changes committed and pushed
- [ ] PR opened targeting `main`
</success_criteria>
