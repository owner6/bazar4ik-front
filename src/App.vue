<template>
  <div id="app">
    <MainHeaderComponent />
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeaderComponent from "./components/MainHeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    MainHeaderComponent,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
