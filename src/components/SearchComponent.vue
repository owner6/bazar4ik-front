<template>
  <div class="search-component">
    <input
      type="text"
      v-model="query"
      @input="onInput"
      placeholder="Search for products..."
      class="search-input"
    />
    <button @click="onSearch" class="search-button">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onInput() {
      this.$emit("input", this.query);
    },
    onSearch() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.search-component {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-unit;

  .search-input {
    width: 100%;
    max-width: 400px;
    padding: $spacing-unit / 2;
    margin-right: $spacing-unit;
    border: 1px solid $light-gray-color;
    border-radius: 4px;
    font-size: 16px;
  }

  .search-button {
    padding: $spacing-unit / 2 $spacing-unit;
    background-color: $primary-color;
    color: $light-color;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}
</style>
