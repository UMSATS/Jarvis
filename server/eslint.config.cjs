const js = require("@eslint/js");
const node = require("eslint-plugin-n");

module.exports = [
  js.configs.recommended,
  node.configs["flat/recommended"],
  {
    ignores: [
      "/node_modules/", 
      "/eslint.config.cjs" // Ignore ESLint config file
    ],
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript features
      sourceType: "module", // Use "script" if your project is CommonJS
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "n/no-process-exit": "off",
      "no-console": "off",
      "n/no-unpublished-require": "off",
    },
  },
];
