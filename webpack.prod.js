const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
// 提取各个css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩css文件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 压缩js文件
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  mode: "production",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    // 需要同时配置css压缩和js压缩
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // 去除所有的console.log
            pure_funcs: ["console.log"],
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".js", ".vue", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: {
          loader: "vue-loader",
        },
        include: [path.resolve(__dirname, "./src")],
      },
      {
        test: /.js$/,
        use: {
          loader: "babel-loader",
        },
        include: [path.resolve(__dirname, "./src")],
      },
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                // 只对文件名后缀是module的文件，进行模块化处理
                auto: /\.module\.\w+$/i,
              },
            },
          },
        ],
        include: [path.resolve(__dirname, "./src")],
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // 只对文件名后缀是module的文件，进行模块化处理
              modules: {
                auto: /\.module\.\w+$/i,
              },
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        include: [
          path.resolve(__dirname, "./src"),
          path.resolve(__dirname, "./node_modules/antd/dist/antd.less"),
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./images/[name]_[hash].[ext]",
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      title: "Title",
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new MiniCssExtractPlugin({
      // 使用contenthash
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[id].[contenthash:8].css",
    }),
  ],
  output: {
    // 使用chunkhash
    filename: "[name].[chunkhash:8].bundle.js",
    chunkFilename: "chunk.[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // 写好此路径，防止（开发or生产）服务器找不到打包出来的文件，“/”代表web服务器的根目录
  },
};
