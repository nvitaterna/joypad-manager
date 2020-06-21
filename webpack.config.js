const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

let mode = 'development';

if (process.env.NODE_ENV) {
  mode = process.env.NODE_ENV;
}

const devMode = mode === 'development';

const config = {
  mode,
  entry: './src/index.ts',
  output: {
    filename: 'joypad-manager.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 244000,
    },
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    })],
  },
  target: 'web',
};

if (devMode) {
  config.devtool = 'inline-source-map';
  delete config.optimization;
} else {
  config.devtool = 'source-map';
}

module.exports = config;
