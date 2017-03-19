const readFile = require('fs').readFileSync;
const path = require('path');
const escapeStringRegExp = require('escape-string-regexp');
const DefinePlugin = require('webpack').DefinePlugin;
const ProgressPlugin = require('webpack').ProgressPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';

// Compile src/ on the fly so we can use components etc. during build time.
require('babel-register')({
  only: new RegExp(escapeStringRegExp(path.join(__dirname, 'src'))),
  plugins: [ 'transform-es2015-modules-commonjs' ]
});

// Minification options used in production mode.
const htmlMinifierOptions = {
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeTagWhitespace: true,
  removeAttributeQuotes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true
};

const extractAppCss = new ExtractTextPlugin({
  filename: '[name]_[contenthash:7].css',
  // Disable in development mode, so we can use CSS hot reloading.
  disable: nodeEnv === 'development'
});

const plugins = [
  new DefinePlugin({
    __VERSION__: JSON.stringify(require('./package.json').version),
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new CopyPlugin([
    { from: '../assets/favicon.ico', to: 'favicon.ico' }
  ]),
  new HtmlPlugin({
    chunks: [ 'bugsnag', 'app' ],
    inject: false,
    template: './index.html',
    minify: nodeEnv === 'production' ? htmlMinifierOptions : false,
    loadingScreen: () => require('./tasks/utils/renderLoadingScreen')()
  }),
  extractAppCss,
  new ProgressPlugin(),
  new LodashModuleReplacementPlugin({
    paths: true
  })
];

if (nodeEnv === 'production') {
  const LoaderOptionsPlugin = require('webpack').LoaderOptionsPlugin;
  const OccurrenceOrderPlugin = require('webpack').optimize.OccurrenceOrderPlugin;
  const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

  plugins.push(
    new OccurrenceOrderPlugin(),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new UglifyJsPlugin({
      // Yeah… Enables some riskier minification that doesn't work in IE8.
      // But üWave doesn't work in IE8 _anyway_, so we don't care.
      compress: {
        screw_ie8: true,
        pure_getters: true,
        unsafe: true,
        warnings: false
      },
      output: { screw_ie8: true },
      // Rename top-level (global scope) variables to shorter names too.
      // There's no other code that depends on those variables to be
      // available, so it doesn't really matter what they're called!
      mangle: { toplevel: true }
    })
  );
}

// Workaround: Seems like babel-loader doesn't pick up on the environment type
// correctly, so we manually load the .babelrc and add the production plugins
// if necessary.
const babelrc = JSON.parse(
  readFile(path.join(__dirname, '.babelrc'), 'utf8')
);
if (nodeEnv === 'production') {
  babelrc.plugins = babelrc.plugins.concat(babelrc.env.production.plugins);
}

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    bugsnag: './_wlk/bugsnag.js',
    app: [ './app.js', './app.css' ]
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: '[name]_[hash].js',
    hashDigestLength: 7
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(mp3|eot|ttf|woff|svg)$/,
        use: [
          { loader: 'file-loader', query: { name: '[name]_[hash:7].[ext]' } }
        ]
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: [
          { loader: 'file-loader', query: { name: '[name]_[hash:7].[ext]' } },
          { loader: 'image-webpack-loader', query: { bypassOnDebug: true } }
        ]
      },
      {
        test: /\.css$/,
        use: extractAppCss.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'postcss-loader' ]
        })
      },
      {
        test: /\.yaml$/,
        use: [ 'json-loader', 'yaml-loader' ]
      },
      {
        test: /\.json$/,
        use: [ 'json-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', query: babelrc },
          nodeEnv !== 'production' && {
            loader: 'eslint-loader',
            query: { cache: true }
          }
        ].filter(Boolean)
      },
      // Treat the tutorial script as a raw file.
      {
        include: require.resolve('uwave-tutorial/build'),
        use: [
          { loader: 'file-loader', options: { name: 'tutorial_[hash:7].[ext]' } }
        ]
      }
    ]
  }
};
