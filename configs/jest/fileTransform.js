const camelcase = require('camelcase');
const { basename, parse } = require('path');

module.exports = {
  process: (src, filename) => {
    const assetFilename = JSON.stringify(basename(filename));

    if (/\.svg$/.test(filename)) {
      const pascalCaseFilename = camelcase(parse(filename).name, {
        pascalCase: true,
      });

      const componentName = `Svg${pascalCaseFilename}`;
      return `const React = require('react');
        module.exports = {
          __esModule: true,
          default: ${assetFilename},
          ReactComponent: React.forwardRef(function ${componentName}(props, ref) {
            return {
              $$typeof: Symbol.for('react.element'),
              type: 'svg',
              ref: ref,
              key: null,
              props: Object.assign({}, props, {
                children: ${assetFilename}
              })
            };
          }),
        };`;
    }

    return `module.exports = ${assetFilename};`;
  },
};
