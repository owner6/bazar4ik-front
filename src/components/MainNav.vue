<template>
  <header>
    <top-nav-component />
    <bottom-nav-component />
  </header>
</template>

<script>
import TopNavComponent from "./TopNav.vue";
import BottomNavComponent from "./BottomNav.vue";

export default {
  name: "MainHeaderComponent",
  components: {
    TopNavComponent,
    BottomNavComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
