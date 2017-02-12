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
          use: 'css-loader!sass-loader',
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
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, 
        loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../../style.css"),
  ]
}

