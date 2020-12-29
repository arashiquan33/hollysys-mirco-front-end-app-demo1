import HelloWorld from "./components/HelloWorld.vue";
import HelloChina from "./components/HelloChina.vue";
// import VueRouter from "vue-router";
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [
  { path: "/helloWorld", component: HelloWorld },
  { path: "/helloChina", component: HelloChina }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   routes // (缩写) 相当于 routes: routes
// });

export default routes;
