//const path = require("path");
const isBuildLib = process.env.build_lib;
module.exports = {
  filenameHashing: false,
  devServer: {
    port: 9000
  },
  configureWebpack: function() {
    return {};
  },
  chainWebpack: config => {
    if (!isBuildLib) {
      config.plugin("html").tap(args => {
        args[0].template =
          "node_modules/@hollysys-mirco-front-end/core/index.html";
        return args;
      });
    }
  }
};
