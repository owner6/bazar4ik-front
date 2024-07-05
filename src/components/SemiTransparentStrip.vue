<template>
  <nav class="SemiTransparentStrip">
    <router-link to="/listings" class="navbar-item">Listings</router-link>
  </nav>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
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

.SemiTransparentStrip {
  background-color: $extra-color-LightGreenPastel;
  padding: $spacing-unit;
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>
