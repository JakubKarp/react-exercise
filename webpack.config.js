const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })],
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        presets: [
          "es2015",
          "react"
        ]
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }]
    }]
  }
}