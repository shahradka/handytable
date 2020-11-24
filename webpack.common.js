const webpack = require('webpack');
const path = require('path');
const markdownRenderer = require('react-markdown-reader').renderer;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');


module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new HtmlWebpackPlugin({
        title: 'Handy Table',
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/, // exclude node_modules
        failOnError: false, // show a warning when there is a circular dependency
      }),
  ],
  module: {
      rules:[
        {
            test: /\.tsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
          },
          {
            test: /\.(less|css)$/,
            use: [
              'css-loader',
              'less-loader?javascriptEnabled=true'
            ]
          },
          {
            test: /\.md$/,
            use: [
              {
                loader: 'html-loader'
              },
              {
                loader: 'markdown-loader',
                options: {
                  pedantic: true,
                  renderer: markdownRenderer()
                }
              }
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
            use: [
              {
                loader: 'url-loader?limit=1&hash=sha512&digest=hex&size=16&name=resources/[hash].[ext]'
              }
            ]
          },
      ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};