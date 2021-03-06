// var server_port = process.env.PORT || 4000;
// var server_host = process.env.HOST || "0.0.0.0";

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  // performance: {
  //   hints: process.env.NODE_ENV === 'production' ? "warning" : false
  // },
  devServer: {
    contentBase: "./dist",
    disableHostCheck: true,
    port: 5000
  }
};
