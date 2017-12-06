/*
  Webpack configuration file.
  Author: Alexandra
  Latest modified: 2017-12-06 20:06
*/

const path = require('path');
const webpack = require('webpack');
const WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractStyle = new ExtractTextPlugin('index.min.css');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'index.min.js'
  },
  module: {
    rules: [
      {test:/\.(js|jsx)$/, loader:'babel-loader'},
      /*
      {test:/\.css$/, loader:ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
        publicPath: '/dist/'
      })},
      */
      {test:/\.css$/, loader:extractStyle.extract(['css-loader'])},
      {test:/\.less$/, loader:extractStyle.extract(['css-loader', 'less-loader'])},
      {test:/\.(woff2?|ttf|otf|eot|svg)$/, loader:'file-loader?name=[path][name].[ext]'},
      {test:/\.(png|gif|jpe?g|svg)$/i, loader:['file-loader?name=[path][name].[ext]','image-webpack-loader']}
    ]
  },
  plugins: [
    extractStyle,
    new WebpackUglifyJsPlugin({
      cacheFolder: path.join('./dist/cache-uglified-js'),
      minimize: true,
      sourceMap: true,
      output: {comments:false},
      compress: {warnings:true, properties:false}
    }),
    new CopyWebpackPlugin([
      { from: './images', to: path.join( './images') }
    ])
  ]
};

