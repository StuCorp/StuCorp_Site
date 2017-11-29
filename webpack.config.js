var path = require("path"); 

var config = {

  entry: "./client/src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "client/build")
  },
  devtool: 'source-map'

};

module.exports = config;