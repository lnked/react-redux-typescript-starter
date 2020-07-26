const { production } = require('../options');

module.exports = ({ name }) => {
  return {
    loader: 'thread-loader',
    options: {
      name,
      workers: 4,
      workerParallelJobs: 50,
      poolRespawn: production,
    }
  };
}
