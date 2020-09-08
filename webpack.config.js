const path = require('path');

module.exports = {
  mode: 'production',
  entry: "./src/index.ts",
  output: {
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};