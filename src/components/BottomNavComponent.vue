<template>
  <nav class="bottom-nav">
    <search-component @search="handleSearch"></search-component>
  </nav>
</template>

<script>
import SearchComponent from "./UI/SearchComponent.vue";

export default {
  name: "BottomNavComponent",
  components: {
    SearchComponent,
  },
  methods: {
    handleSearch(query) {
      // logic обробки search
      console.log(query);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.bottom-nav {
  background-color: $extra-color-LightGreenPastel;
  padding: $spacing-unit;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
