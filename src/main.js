import Vue from "vue";
import App from "./App.vue";
import { HollysysMircoFrontEndApp } from "@hollysys-mirco-front-end/core";
//Vue.config.productionTip = false;

const myApp = new HollysysMircoFrontEndApp({
  name: process.env.npm_package_name,
  pathPrefix: "/demo1",
  beforeInstall: function() {},
  install: function(mountTo, props) {
    this.instance = new Vue({
      props,
      render: h => h(App)
    }).$mount(mountTo);
  },
  uninstall: function() {
    this.install = null;
  },
  beforeUninstall: function() {}
});

export default myApp;
