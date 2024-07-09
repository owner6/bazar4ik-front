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
  position: absolute;
  display: flex;
  width: 100%;
  top: 0;
  height: 69px;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1000;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 75px;
}
</style>
