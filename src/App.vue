<template>
  <div id="app">
    <MainNav />
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from "./components/MainNav.vue";
import Footer from "./components/FooterNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
    Footer,
  },
};
</script>
