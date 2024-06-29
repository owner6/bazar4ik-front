<template>
  <nav class="bottom-nav"></nav>
</template>

<script>
export default {
  name: "BottomNavComponent",
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

.bottom-nav {
  background-color: $extra-color-LightGreenPastel;
  padding: $spacing-unit;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
