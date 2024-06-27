<template>
  <div id="app">
    <div class="listings-header">
      <div class="listings-view">
        <h1>Listings</h1>
        <p>Browse our wide selection of products.</p>
        <CategorySidebar />
      </div>
    </div>
  </div>
</template>

<script>
import CategorySidebar from "../components/CategorySidebarComponent.vue";

export default {
  name: "ListingsView",
  components: {
    CategorySidebar,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.listings-view {
  padding: $spacing-unit * 2;

  h4 {
    font-size: $H4;
    margin-bottom: $spacing-unit;
    color: $primary-color;
  }

  p {
    font-size: 18px;
    color: $dark-color;
  }
}
</style>
