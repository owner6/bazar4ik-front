<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      v-model="query"
      @keyup.enter="onSearch"
      placeholder="Search..." />
    <button class="search-button" @click="onSearch">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      query: ''
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.query);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.search {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-input {
  flex: 1;
  padding: 10px 0 10px 0;
  border: 0.5px solid;
  border-radius: 7px;
  background-color: map-get($colors, 'light-green');
  width: 412px;
  height: 22px;
  background-image: url('/src/assets/icons/magnifying-glass--glass-search-magnifying.svg');
  background-repeat: no-repeat;
  background-position: 10px center;
  text-indent: 32px;
  font-family: $font-family-poppins;
}

.search-button {
  padding: 12px 24px 12px 24px;
  border: none;
  background-color: map-get($colors, 'peach');
  color: $color-text;
  cursor: pointer;
  border-radius: 7px;
  width: 95px;
  height: 42px;
  font-family: $font-family-poppins;

  &:hover {
    color: $color-text;
  }
}
</style>
