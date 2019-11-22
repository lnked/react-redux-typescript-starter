module.exports = (props) => {
  return {
    loader: 'postcss-loader',
    options: {
      ...props,
    }
  };
}
