const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
// 开发环境，不配置任何压缩，任何hash,不提取任何css文件

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
  optimization: {
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
        use: [
          {
            loader: "vue-loader",
          },
        ],
        include: [path.resolve(__dirname, "./src")],
      },
      {
        test: /.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        include: [path.resolve(__dirname, "./src")],
      },
      {
        test: /.css$/,
        use: [
          "style-loader",
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
        include: [
          path.resolve(__dirname, "./src"),
          // 如果使用了elementui框架，记得处理它的css文件
          path.resolve(
            __dirname,
            "./node_modules/element-ui/lib/theme-chalk/index.css"
          ),
        ],
      },
      {
        test: /.less$/,
        use: [
          "style-loader",
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
        include: [path.resolve(__dirname, "./src")],
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
  ],
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "chunk.[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // 写好此路径，防止（开发or生产）服务器找不到打包出来的文件，“/”代表web服务器的根目录
  },
};
