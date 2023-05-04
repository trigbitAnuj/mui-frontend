module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"]],
        "newlines-between": "always",
      },
    ],
  },
};
