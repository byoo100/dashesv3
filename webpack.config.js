var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader',
        query:{
          presets:['es2015']
        } 
      },
      {
        test:/\.scss$/,
        loader:ExtractTextPlugin.extract({ 
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader',
        })
      },
      {
        test:/\.css$/,
        loader:ExtractTextPlugin.extract({ 
          fallback: 'style-loader',
          use: 'css-loader',
        })
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },

    ]
  },
  plugins: debug ? [
    new ExtractTextPlugin("../../style.css"),
  ] : [
    new ExtractTextPlugin("../../style.css"),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}

