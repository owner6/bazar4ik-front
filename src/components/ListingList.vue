<template>
  <div class="listing-list">
    <ListingCard
      v-for="listing in listings"
      :key="listing.id"
      :listing="listing" />
  </div>
</template>

<script>
import ListingCard from './ListingCard.vue';

export default {
  name: 'ListingList',
  components: { ListingCard },
  props: {
    listings: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.listing-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
</style>
