const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { options } = require('../options');

module.exports = {
  target: 'web',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    pathinfo: false,
    filename: 'static/[name].[chunkhash:8].js',
    chunkFilename: 'static/[name].[chunkhash:8].chunk.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(options.env)
    }),

    new HtmlWebpackPlugin({
      title: 'React app',
      filename: 'index.html',
      template: 'public/index.html',
      // favicon: 'public/favicon.ico',

      // production
      hash: false,
      cache: true,
      inject: true,
      compile: false,
      prefetch: ['**/*.js'],
      preload: ['**/*.js'],
      chunksSortMode: 'dependency',
      production: true,
      minify: {
        html5: true,
        caseSensitive: true,
        keepClosingSlash: true,
        removeComments: true,
        decodeEntities: true,
        customAttrAssign: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        preventAttributesEscaping: true,
        processConditionalComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  resolve: {
    mainFiles: ['index'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      src: options.root,
      // hocs: path.resolve(options.root, 'hocs'),
      // utils: path.resolve(options.root, 'utils'),
      // store: path.resolve(options.root, 'store'),
      // theme: path.resolve(options.root, 'theme'),
      routes: path.resolve(options.root, 'routes'),
      // config: path.resolve(options.root, 'config'),
      // typings: path.resolve(options.root, 'typings'),
      // helpers: path.resolve(options.root, 'helpers'),
      // layouts: path.resolve(options.root, 'layouts'),
      // settings: path.resolve(options.root, 'settings'),
      // fragments: path.resolve(options.root, 'fragments'),
      components: path.resolve(options.root, 'components'),
      // assets: path.resolve(options.root, 'assets'),
      // images: path.resolve(options.root, 'assets/images'),
      // styles: path.resolve(options.root, 'assets/styles'),
      // scripts: path.resolve(options.root, 'assets/scripts'),
      // svgstore: path.resolve(options.root, 'assets/svgstore'),
      'styled-components': path.resolve(process.cwd(), 'node_modules/styled-components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.resolve(process.cwd(), '.cache'),
          }
        }
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
  }
}
