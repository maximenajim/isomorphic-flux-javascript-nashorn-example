module.exports = {
  context: __dirname + "/src/main/resources/app",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/src/main/resources/static"
  },
  module: {
    loaders: [
      {
        test: /\.js(x|)?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};
