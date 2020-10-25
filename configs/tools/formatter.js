module.exports.formatter = (params, stringify = false) => {
  const keys = Object.keys(params);
  const environments = {};

  if (keys.length && stringify) {
    for (const key in params) {
      if (!key.startsWith('SECRET')) {
        const name = key.replace('REACT_APP_', '');
        environments[name] = JSON.stringify(params[key]);
      }
    }
  }

  return environments;
}
