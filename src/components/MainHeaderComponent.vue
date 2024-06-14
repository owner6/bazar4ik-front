<template>
  <header class="main-header">
    <top-nav-component />
    <bottom-nav-component />
  </header>
</template>

<script>
import TopNavComponent from "./TopNavComponent.vue";
import BottomNavComponent from "./BottomNavComponent.vue";

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

.main-header {
  width: 100%;
}
</style>
