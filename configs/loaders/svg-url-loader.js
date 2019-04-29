module.exports = () => {
  return {
    loader: 'svg-url-loader',
    options: {
      limit: 10 * 1024,
      noquotes: true,
    },
  };
};
