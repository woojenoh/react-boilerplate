const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SizePlugin = require('size-plugin');

module.exports = (env, argv) => {
  console.log('Build', argv.mode);

  return {
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            argv.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, // for HMR
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.(png)$/,
          use: ['file-loader']
        },
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'vendors'
      },
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new SizePlugin(),
    ],
    devServer: {
      open: true,
      inline: true,
      hot: true,
      overlay: true,
      historyApiFallback: true,
      port: 4000,
    }
  };
};