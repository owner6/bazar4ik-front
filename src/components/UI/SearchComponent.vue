<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      v-model="query"
      @keyup.enter="onSearch"
      placeholder="Search..."
    />
    <button class="search-button" @click="onSearch">Search</button>
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
    onSearch() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.search {
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.search-button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: $primary-color;
  color: #fff;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  font-size: 1rem;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
</style>
