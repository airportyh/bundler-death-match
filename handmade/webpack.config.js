const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      title: 'Handmade',
      template: 'webpack-index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'webpack-dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  }
};