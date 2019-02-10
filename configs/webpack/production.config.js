const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { options } = require('../options');

const plugins = []

if (options.compression) {
  plugins.push(
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  )
}

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  bail: true,
  performance: {
    hints: 'warning',
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
  module: {
    rules: [
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      // }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: options.sourceMap, // Must be set to true if using source-maps in production
        extractComments: false,
        terserOptions: {
          ecma: 6,
          warnings: false,
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: true,
          parse: {
            html5_comments: false,
          },
          compress: {
            inline: false,
            sequences: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            unsafe: false,
            warnings: false,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            dead_code: true,
            drop_console: true,
            drop_debugger: true,
            global_defs: {
              DEBUG: false,
            },
          },
          output: {
            ascii_only: true,
            comments: false,
            beautify: false,
            indent_level: 0,
          },
        }
      }),
    ],
    minimize: true,
    chunkIds: 'named',
    nodeEnv: 'production',
    moduleIds: 'hashed',
    sideEffects: true,
    usedExports: true,
    namedChunks: true,
    namedModules: true,
    noEmitOnErrors: true,
    providedExports: false,
    occurrenceOrder: false,
    concatenateModules: true,
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      maxAsyncRequests: 20,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
          priority: -10,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
      verbose: false,
    }),

    new WebpackChunkHash({
      algorithm: 'md5',
    }),

    // new ExtractTextPlugin('style.css')

    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.optimize\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   cssProcessorPluginOptions: {
    //     preset: ['default', { discardComments: { removeAll: true } }],
    //   },
    //   canPrint: true
    // }),

    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
      options: {},
    }),

    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.6,
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.IgnorePlugin(/^\.\/locale\/(en|ru)\.js$/, /moment$/),

    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ru/),

    // new WebpackManifestPlugin({
    //   basePath: define.rs_output_path,
    //   fileName: '../webpack-manifest.json',
    // }),

    new webpack.HashedModuleIdsPlugin(),

    ...plugins,
  ]
}
