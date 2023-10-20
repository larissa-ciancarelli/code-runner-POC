const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    src: './client/App.jsx'
    },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: 'index.html',
  })],
  module: {
    rules:[
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /.(css|scss)$/,
        include: path.resolve(__dirname, './node_modules'),
        use: [
          'css-loader',
          'style-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, 
            }
          }
        ]
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'client'),
      publicPath: '/'
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
};