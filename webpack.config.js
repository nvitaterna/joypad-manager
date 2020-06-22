const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

let mode = 'development';

if (process.env.NODE_ENV) {
  mode = process.env.NODE_ENV;
}

const name = 'joypad-manager';

const devMode = mode === 'development';

let configs;

const baseConfig = {
  mode,
  entry: './src/test.ts',
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'JoypadManager',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  target: 'web',
};

if (devMode) {
  baseConfig.devtool = 'inline-source-map';
  baseConfig.watch = true;
  baseConfig.output.filename = `${name}.js`;
  baseConfig.output.path = path.resolve(__dirname, 'dev');
  baseConfig.plugins = [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ];
  configs = baseConfig;
} else {
  baseConfig.output.path = path.resolve(__dirname, 'dist');
  baseConfig.devtool = 'source-map';

  const terserOptions = {
    compress: {
      drop_console: true,
    },
  };

  const minConfig = {
    ...baseConfig,
    output: {
      ...baseConfig.output,
      filename: `${name}.min.js`,
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions,
      })],
    },
  };
  const prodConfig = {
    ...baseConfig,
    output: {
      ...baseConfig.output,
      filename: `${name}.js`,
    },
    optimization: {
      minimize: false,
      minimizer: [new TerserPlugin({
        terserOptions,
      })],
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
  };
  configs = [minConfig, prodConfig];
}

module.exports = configs;
