const transforms = require("./transform");

module.exports = function({ development, production, test, loose, legacy }) {
  if (test) {
    return [
      "@babel/plugin-transform-runtime",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
    ];
  }

  return [
    ["transform-imports", transforms],
    "@babel/plugin-syntax-dynamic-import",
    "transform-react-remove-prop-types",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-transform-react-constant-elements",
    "@babel/plugin-transform-react-inline-elements",
    ["@babel/plugin-proposal-decorators", { legacy }],
    ["@babel/plugin-proposal-class-properties", { loose }],
    ["babel-plugin-styled-components", {
      ssr: true,
      pure: true,
      minify: true,
      fileName: false,
      displayName: true,
    }],
    ["module-resolver", {
      "extensions": [".ts", ".js", ".tsx", ".jsx"],
      "root": ["./src"],
    }],
  ];
};
