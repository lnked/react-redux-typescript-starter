const marked = require('marked');
const renderer = new marked.Renderer();

module.exports = () => {
  return {
    loader: 'markdown-loader',
    options: {
      pedantic: true,
      renderer,
    }
  }
}
