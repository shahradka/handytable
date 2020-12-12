const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

const webpackConfig = require('./webpack.dev.js');
const { NODE_ENV } = process.env;

const app = express();
let config = require('./webpack.dev.js');
if (NODE_ENV === 'development') {
  config = require('./webpack.dev');
} else config = require('./webpack.prod');

const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, webpackConfig.output.publicPath);
app.use(middleware);
app.use(webpackHotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});

app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) res.sendStatus(404);
    else res.send(file.toString());
  });
});
