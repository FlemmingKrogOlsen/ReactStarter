/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './webpack/index.html',
      inject: false,
    }),
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
