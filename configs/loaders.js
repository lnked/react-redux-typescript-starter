const path = require('path');
const options = require('./options');
const { cacheDirectory } = options;

module.exports = [
  { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre' },
  { test: /\.css$/, use: ['style-loader', 'css-loader'] },
  {
    test: /\.(ts|js)x?$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory,
        }
      },
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory,
        }
      }
    ]
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 50000,
          mimetype: 'application/font-woff',
          name: 'fonts/[hash].[ext]'
        }
      }
    ]
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 50000,
          mimetype: 'image/svg+xml',
          name: 'static/images/[hash].[ext]'
        }
      }
    ]
  },
  // {
  //   test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
  //   use: [
  //     {
  //       loader: 'url-loader',
  //       options: {
  //         limit: 100000,
  //         name: '[name].[ext]',
  //       },
  //     },
  //   ],
  // },
  {
    test: /\.(ttf|eot|woff|woff2)(\?\S*)?$/,
    use: {
      loader: "file-loader",
      options: {
        name: "fonts/[name].[ext]",
      },
    },
  },
  {
    test: /\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'assets/'
        }
      }
    ]
  },
]
