module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard-with-typescript",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    // parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    // project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {},
};
