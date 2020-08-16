module.exports.formatter = (params, stringify = false) => {
  const keys = Object.keys(params);

  if (keys.length && stringify) {
    for (const x in params) {
      if (!x.startsWith('SECRET')) {
        params[x] = JSON.stringify(params[x]);
      }
    }
  }

  return params;
}
