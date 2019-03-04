const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const { GenerateSW } = require('workbox-webpack-plugin');

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const options = require('../options');
const terserOptions = require('../terser-options');

const plugins = [];

if (options.compression) {
  plugins.push(
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  );
}

if (options.analyze) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  );
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
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    chunkIds: 'named',
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
      maxInitialRequests: Infinity,
      minSize: 0,
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
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: options.sourceMap, // Must be set to true if using source-maps in production
        extractComments: false,
        terserOptions,
      }),
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'md4',
      hashDigest: 'base64',
      hashDigestLength: 5,
    }),

    new CleanWebpackPlugin({
      root: options.root,
      verbose: false,
    }),

    new WebpackChunkHash({
      algorithm: 'md5',
    }),

    new ScriptExtHtmlWebpackPlugin({
      defer: [/vendors/, /bundle/, /.*bundle/],
      inline: 'runtime',
      defaultAttribute: 'async',
    }),

    new GenerateSW({
      swDest: 'sw.js',
      include: [/\.html$/, /\.js$/, /\.json$/],
      exclude: [/\.jpg$/, /\.png$/, /\.map$/, /^manifest.*\.js(?:on)?$/],
      precacheManifestFilename: 'precache-manifest.[manifestHash].js',
    }),

    new ImageminPlugin({
      pngquant: ({ quality: '50' }),
      plugins: [imageminMozjpeg({ quality: '50' })]
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
      debug: options.development,
      context: options.source,
      minimize: true,
      options: {},
    }),

    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.6,
    }),

    // new webpack.IgnorePlugin(/^\.\/locale\/(en|ru)\.js$/, /moment$/),

    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ru/),

    // new WebpackManifestPlugin({
    //   basePath: define.rs_output_path,
    //   fileName: '../webpack-manifest.json',
    // }),

    ...plugins,
  ],
};
