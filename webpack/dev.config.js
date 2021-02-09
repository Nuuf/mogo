/* eslint-disable */
const path = require('path');
const bas = require('./bas.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
  const dev = {
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, '..', 'playground', 'index.html') })],
    devServer: {
      port: 3000,
      hot: false,
      open: false,
      host: '0.0.0.0',
    },
    entry: {
      mogo: path.resolve(__dirname, '..', 'playground', 'index.ts'),
    },
  };
  return { ...dev, ...bas() };
};