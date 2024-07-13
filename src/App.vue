<template>
  <div id="app">
    <MainNav />
    <router-view></router-view>
    <Footer />
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
