<template>
  <header class="main-header">
    <top-nav-component />
  </header>
</template>

<script>
import TopNavComponent from "./TopNavComponent.vue";

export default {
  name: "MainHeaderComponent",
  components: {
    TopNavComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.main-header {
  width: 100%;
}
</style>
