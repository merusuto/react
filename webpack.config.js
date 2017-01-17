var path = require("path");
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ResolverPlugin = require("webpack").ResolverPlugin;

module.exports = {
  devtool: 'source-map',
  entry: "./src/app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, include: /react-model/, loader: 'babel?sourceMap' },
      { test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel?sourceMap' },
      { test: /\.scss$/, loader: 'style!css?sourceMap!resolve-url?sourceMap!sass?sourceMap' },
      { test: /\.css$/, loader: 'style!css?sourceMap' },
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'url' }
    ]
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ]
};
