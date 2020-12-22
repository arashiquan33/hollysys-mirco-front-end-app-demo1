module.exports = {
  filenameHashing: false,
  devServer: {
    port: 9000
  },
  configureWebpack: {
    entry: {
      index: "./src/index.js"
    },
    output: {
      libraryTarget: "umd"
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].template =
        "node_modules/@hollysys-mirco-front-end/core/index.html";
      return args;
    });
  }
};
