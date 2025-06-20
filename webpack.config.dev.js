const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./src'],
  }
});
