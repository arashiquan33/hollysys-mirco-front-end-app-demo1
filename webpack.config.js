const path = require("path");
module.exports = {
  entry: {
    app: [
      './src/main.js'
    ],
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    libraryTarget: "window",
    library: "MyDemo"
  }
};
