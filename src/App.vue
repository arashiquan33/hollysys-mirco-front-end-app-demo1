<template>
  <div class="hollysys-mirco-front-end-app-vue-example">
    <div class="top">
      <router-link to="/helloWorld">go to helloworld</router-link>
      <router-link to="/helloChina">go to hellochina</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss" scoped>
.hollysys-mirco-front-end-app-vue-example {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .top {
    height: 100px;
    display: flex;
    flex-shrink: 0;
  }
  .content {
    display: flex;
    flex-grow: 1;
  }
}
</style>
