const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const urlLoader = {
  loader: 'url-loader',
  options: { limit: 40000 }
};
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)/,
        use: [urlLoader, 'image-webpack-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;