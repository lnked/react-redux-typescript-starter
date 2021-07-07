module.exports = ({ ...props }) => {
  return {
    loader: 'css-loader',
    options: {
      ...props,
    },
  };
};
