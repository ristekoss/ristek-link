var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}});

module.exports = {
  entry: './demo/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo/dist'),
  },
  module: {
    loaders:[{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=512'
    }]
  },
  plugins: [
    uglifyJsPlugin
  ]
};
