const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const production = process.env.NODE_ENV === "production";

module.exports = {
  entry: { myApp: path.resolve(__dirname, "./src/index.tsx") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: production ? "bundle.[contenthash].js" : "bundle.js",
    publicPath: "/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: !production,
            },
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: !production,
            },
          },
        ],
        include: /\.module\.(css|scss)$/,
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        exclude: /\.module\.(css|scss)$/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "issue3",
      template: "./src/index.html",
      favicon: "./src/assets/images/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: production ? "styles.[hash].css" : "[name].css",
      chunkFilename: production ? "[id].[hash].css" : "[id].css",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/reg_service/api/v1/": {
        target: process.env.SERVER_HOST || "http://localhost:4000",
      },
    },
  },
  mode: production ? "production" : "development",
};
