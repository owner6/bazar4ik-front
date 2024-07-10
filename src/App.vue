<template>
  <div id="app">
    <MainNavComponent />
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavComponent from "./components/MainNav.vue";
import Footer from "./components/FooterNav.vue";

export default {
  name: "App",
  components: {
    MainNavComponent,
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
  margin: 0 auto;
}
</style>
