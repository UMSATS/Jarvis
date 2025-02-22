const js = require("@eslint/js");
const node = require("eslint-plugin-n");

module.exports = [
  js.configs.recommended, // Standard JS rules
  node.configs["flat/recommended"], // Node.js best practices
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // Change to "script" if fully using CommonJS
    },
    rules: {
      "no-console": "off", // Allow console.logs
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "n/no-missing-import": "off",
    },
  },
];