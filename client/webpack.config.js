import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

import {
  API_ENDPOINT,
  CLIENT_PORT,
  SERVER_ADDRESS,
  SERVER_PORT,
} from 'shared/config.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

export default {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: resolve(dirName, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: join(dirName, 'public/'),
    },
    port: CLIENT_PORT,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new webpack.DefinePlugin({
      SERVER_ADDRESS: JSON.stringify(SERVER_ADDRESS),
      SERVER_PORT: JSON.stringify(SERVER_PORT),
      API_ENDPOINT: JSON.stringify(API_ENDPOINT),
    }),
  ],
};
