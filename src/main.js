import Vue from "vue";
import App from "./App.vue";
import getRoutes from "./routes";
import VueRouter from "vue-router";
import {
  HollysysMircoFrontEndApp,
  HollysysMircoFrontEndAppManager
} from "@hollysys-mirco-front-end/framework";

Vue.config.productionTip = false;

const hollysysMircoFrontEndAppVueExample = new HollysysMircoFrontEndApp({
  name: process.env.npm_package_name,
  beforeInstall: function() {
    return Promise.resolve();
  },
  install: function({ mountTo, props,routerBasePath='' }) {
    let routes = getRoutes(routerBasePath);
    let router = new VueRouter({
      routes // (缩写) 相当于 routes: routes
    });
    this.instance = new Vue({
      props,
      router,
      render: h => h(App)
    }).$mount(mountTo);
    return Promise.resolve();
  },
  uninstall: function() {
    this.install = null;
  },
  beforeUninstall: function() {}
});

if (window._HOLLYSYS_MIRCO_FRONT_END_STAND_ALONE) {
  const hollysysMircoFrontEndAppManager = HollysysMircoFrontEndAppManager.getInstance();
  hollysysMircoFrontEndAppManager.installApp(
    hollysysMircoFrontEndAppVueExample
  );
}

export default hollysysMircoFrontEndAppVueExample;
