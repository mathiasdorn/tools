module.exports = {
  devtool: "inline-sourcemap",
  entry: "./style/index.scss",                
  output: {
    path: __dirname,
    filename: "css.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass!"
      }
    ]
  }
}