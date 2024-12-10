const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app/initialize/loader.ts",
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "builddir"),
    filename: "lunarwolf.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "z/newtab.html", to: "newtabpage/newtab.html" },
      ],
    }),
  ],
  externals: {
    electron: "commonjs2 electron",
  },
};
