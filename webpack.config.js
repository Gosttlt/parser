const path = require('path')

const modules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
        },
      },
    },
    {
      test: /\.node$/,
      loader: 'node-loader',
    },
  ],
}

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
  },
  watch: true,
  mode: 'development',
  entry: './src/index.ts',
  externals: {canvas: '{}'},
  devServer: {
    port: 5000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  module: modules,
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
