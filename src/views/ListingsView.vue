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
import CategorySidebar from "../components/CategorySidebar.vue";

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
  padding: map-get($spacings, "lg");

  h4 {
    font-size: $font-size-h4;
    margin-bottom: map-get($spacings, "md");
    color: $color-text;
  }

  p {
    font-size: 18px;
    color: $color-text;
  }
}
</style>
