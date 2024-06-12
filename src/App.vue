<template>
  <div id="app">
    <Header />
    <CategorySidebar />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/HeaderComponent.vue";
import CategorySidebar from "./components/CategorySidebarComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    Header,
    CategorySidebar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
