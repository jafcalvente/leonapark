import { configs } from "eslint-plugin-lit";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // ...configs["flat/recommended"],
    ...configs["recommended"], // Using recommended configuration for Shadow DOM
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["/src/main.js"],
  },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
];
