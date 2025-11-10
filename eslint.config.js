import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tanstackRouter from "@tanstack/eslint-plugin-router";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node, React: "readonly" },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@tanstack/router": tanstackRouter,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...tanstackRouter.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Désactiver no-undef pour TypeScript (TypeScript gère déjà la vérification des types)
      "no-undef": "off",
    },
  },
  { ignores: ["dist/**", "node_modules/**", "*.config.js", "*.config.ts"] },
];
