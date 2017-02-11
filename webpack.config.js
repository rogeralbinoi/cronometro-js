module.exports = {
  entry: `${__dirname}/js/dev/main.js`,
  output: {
      path: `${__dirname}`,
      filename: "js/dist/main.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}