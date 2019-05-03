module.exports = () => {
  return {
    loader: 'thread-loader',
    options: {
      workers: 4,
    }
  };
}
