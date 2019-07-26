const { production } = require('../options');

module.exports = () => {
  return {
    loader: 'thread-loader',
    options: {
      workers: 4,
      workerParallelJobs: 50,
      poolRespawn: production,
    }
  };
}
