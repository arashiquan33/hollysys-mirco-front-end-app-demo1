import Vue from "vue";
import App from "./App.vue";
import {
  HollysysMircoFrontEndApp,
  HollysysMircoFrontEndAppManager
} from "@hollysys-mirco-front-end/framework";

Vue.config.productionTip = false;

const hollysysMircoFrontEndAppVueExample = new HollysysMircoFrontEndApp({
  name: process.env.npm_package_name,
  pathPrefix: "/demo1",
  beforeInstall: function() {
    return Promise.resolve();
  },
  install: function({ mountTo, props }) {
    this.instance = new Vue({
      props,
      render: h => h(App)
    }).$mount(mountTo);
    return Promise.resolve();
  },
  uninstall: function() {
    this.install = null;
  },
  beforeUninstall: function() {}
});

HollysysMircoFrontEndAppManager.installApp(hollysysMircoFrontEndAppVueExample);

export default hollysysMircoFrontEndAppVueExample;
