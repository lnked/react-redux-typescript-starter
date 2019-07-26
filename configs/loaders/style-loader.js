module.exports = (props = {}) => {
  return {
    loader: 'style-loader',
    options: {
      ...props,
    },
  };
}
