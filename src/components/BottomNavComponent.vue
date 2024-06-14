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
  background-color: $light-gray-color;
  padding: $spacing-unit;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
