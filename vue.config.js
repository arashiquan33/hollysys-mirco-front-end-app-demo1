module.exports = {
  indexPath: "node_modules/@hollysys-mirco-front-end/core/index.html",
  devServer: {
    port: 9000
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].template =
        "node_modules/@hollysys-mirco-front-end/core/index.html";
      return args;
    });
  }
};
