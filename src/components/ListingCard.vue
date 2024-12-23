<!-- ProductCard.vue -->
<template>
  <div class="listing-card">
    <h3>{{ listing.name }}</h3>
    <p>{{ listing.description }}</p>
    <p>{{ listing.category }}</p>
    <p class="price">{{ listing.price }}$</p>
  </div>
</template>

<script>
import listingsView from '../views/ListingsView.vue';

export default {
  name: 'ProductCard',
  computed: {
    listingsView() {
      return listingsView;
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.listing-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}
.price {
  font-weight: bold;
  color: green;
}
</style>
