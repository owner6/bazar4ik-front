<template>
  <div class="listing-card">
    <img :src="listing.image" class="listing-image" />
    <div class="listing-info">
      <div class="listing-pricing">
        <span class="current-price">${{ listing.price }}</span>
      </div>
      <h3 class="listing-title">{{ listing.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListingCart',
  props: {
    listing: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.listing-card {
  position: relative;
  width: 260px;
  box-shadow: 0 4px 4px $color-secondary;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
}

.listing-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.listing-info {
  padding: 16px;
  background: map-get($colors, 'light-gray');
  border: 1px solid $color-border;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  .listing-title {
    font-size: 16px;
    margin-bottom: 8px;
    text-align: left;
  }

  .listing-pricing {
    display: flex;
    align-items: center;
  }
}
</style>
