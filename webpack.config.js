const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets/images',
        to: 'images'
      }
    ])
  ]
};
