const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.ts"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_module/
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".js"],
    mainFields: ["browser", "module", "main"]
  },
  output: {
    filename: "bundle.js",
    clean: true,
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
