module.exports = ({ ...props }) => {
  return {
    loader: 'sass-loader',
    options: {
      ...props,
    }
  };
}
