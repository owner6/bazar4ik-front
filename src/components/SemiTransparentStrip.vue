<template>
  <nav class="semi-transparent-strip">
    <div>Catalogue</div>
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

.semi-transparent-strip {
  position: fixed;
  top: 75px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5); // semi-transparent white
  z-index: 1000; // high z-index to ensure it's on top
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 75px 0 75px;
}
</style>
