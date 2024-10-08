// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // global ignore (cannot be combined with other config keys)
  // {
  //   ignores: ['**/*']
  // },
  // default config for this project's typescript
  {
    files: ['src/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
      }],
    },
  },
  // config for new Falcon uber client
  {
    files: ['src/falcon.ts', 'src/endpoints.ts', 'src/_endpoints/*.ts'],
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
);
