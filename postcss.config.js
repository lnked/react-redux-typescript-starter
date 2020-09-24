module.exports = (opts = { }) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-scss',
    /*
    Root (root, postcss) {
      // Transform CSS AST here
    }
    */

    /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  }
};

module.exports.postcss = true;

// module.exports = (opts = {}) => {
//   return {
//     postcssPlugin: "PLUGIN NAME",
//     prepare(result) {
//       const variables = {};
//       return {
//         Declaration(node) {
//           if (node.variable) {
//             variables[node.prop] = node.value;
//           }
//         },
//         RootExit() {
//           console.log(variables);
//         },
//       };
//     },
//   };
// };

// module.exports = {
//   postcssPlugin: 'postcss-example',
//     Root (root, { list, Declaration }) {
//   }
// }

// module.exports = ({ file, options, env }) => ({
//   syntax: require('postcss-scss'),
//   plugins: {
//     'postcss-import': {
//       path: ['src/assets/stylesheets'],
//     },
//     'postcss-preset-env': {
//       stage: 1,
//       browsers: 'last 2 versions',
//     },
//     'postcss-simple-vars': {
//       silent: true,
//     },
//     'postcss-calc': {},
//     'postcss-nested': {},
//     'postcss-custom-media': {},
//     'postcss-custom-properties': {},
//     'postcss-custom-selectors': {},
//     'postcss-emptymediaqueries': {},
//     'postcss-hexrgba': {},
//     'postcss-position': {},
//     'postcss-url': {},
//     'pixrem': {
//       rootValue: 10,
//     },
//     ...(env === 'production' && {
//       'postcss-will-change': {},
//       'postcss-will-change-transition': {},
//       'postcss-discard-comments': {},
//       'cssnano': {
//         safe: true,
//         calc: false,
//         zindex: false,
//         sourcemap: true,
//         autoprefixer: false,
//         normalizeCharset: true,
//         convertValues: { length: false },
//         colormin: true,
//       },
//       'autoprefixer': {
//         flexbox: 'no-2009',
//       },
//     }),
//   },
// });
