<template>
  <header>
    <top-nav-component />
  </header>
</template>

<script>
import TopNavComponent from "./TopNav.vue";

export default {
  name: "MainHeaderComponent",
  components: {
    TopNavComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
