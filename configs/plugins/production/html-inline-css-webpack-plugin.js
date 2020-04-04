const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const htmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin").default;

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
