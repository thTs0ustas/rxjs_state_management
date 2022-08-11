const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});
module.exports = {
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    fallback: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
    },
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
    },
  },
  plugins: [
    htmlPlugin,
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
