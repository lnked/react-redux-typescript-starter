const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = () => {
  return [
    new HTMLInlineCSSWebpackPlugin({
      replace: {
        removeTarget: true,
        target: '<!-- inline_css_plugin -->',
      },
    }),
  ]
}
