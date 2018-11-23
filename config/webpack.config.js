const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const publicPath = '/';

module.exports = mode => ({
  mode: mode || 'none',
  devtool: mode === 'development' ? 'cheap-module-source-map' : false,
  entry: ['@babel/polyfill', paths.indexSrc],
  output: {
    filename: 'js/bundle.[hash:10].js',
    publicPath,
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: [/\.ico$/, /\.svg$/, /\.jpe?g$/, /\.gif$/, /\.png$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'assets/[name].[hash:10].[ext]',
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.htmlSrc,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  performance: {
    hints: mode === 'development' ? false : 'warning',
  }
});
