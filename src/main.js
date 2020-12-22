
import Vue from "vue";
import App from "./App.vue";
// import {
//   HollysysAppManager,
//   AbstractHollysysMircoFrontEndApp
// } from "@hollysys-mirco-front-end/core";

Vue.config.productionTip = false;

// new HollysysAppManager({
//   name:"",
//   install:function(mountTo,props,store){
//     new Vue({
//       render: h => h(App)
//     }).$mount(mountTo);
//   },
//   uninstall:function(){

//   }
// })
//HollysysAppManager.registryApp()

new Vue({
  render: h => h(App)
}).$mount("#app");
