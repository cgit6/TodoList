const path = require("path");
const Minifyplugin = require("babel-minify-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rule: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_module/,
        loaber: "babel-loader",
      },
    ],
  },
  Plugin: [
    new Minifyplugin(
      {},
      {
        comment: false,
      }
    ),
  ],
};
