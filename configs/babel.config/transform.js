const transform = (prefix, preventFullImport) => {
  return {
    transform: importName => {
      const name = importName.replace(/\.?([A-Z])/g, (x, y) => `-${y.toLowerCase()}`).replace(/^-/, '')
      console.log({ name, importName }, `${prefix}/${name}`)
      return `${prefix}/${name}`
    },
    preventFullImport,
  };
};

module.exports = {
  './components': transform('./components', true),
  'pages\/?(((\\w*)?\/?)*)': transform('pages', false),
  'layouts\/?(((\\w*)?\/?)*)': transform('layouts', false),
  'services\/?(((\\w*)?\/?)*)': transform('services', false),
  'fragments\/?(((\\w*)?\/?)*)': transform('fragments', false),
  // 'components\/?(((\\w*)?\/?)*)': transform('components', false),
  'containers\/?(((\\w*)?\/?)*)': transform('containers', false),
}
