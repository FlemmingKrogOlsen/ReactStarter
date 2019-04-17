/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
