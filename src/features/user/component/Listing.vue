<template>
  <div class="listing-card">
    <img src="../../../assets/images/doge.webp" class="listing-image" />
    <div class="listing-info">
      <div class="listing-pricing">
        <span class="current-price">${{ listing.price }}</span>
      </div>
      <h3 class="listing-title">{{ listing.title }}</h3>
    </div>
    <div class="listing-actions">
      <Button>

      </Button>
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
@import '@/assets/scss/main';

.listing-card {
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 20px;
  border: $color-tertiary 1px solid;

  width: 334.5px;
  height: 407px;

  &:hover {
    transform: translateY(-3px);
  }
}

.listing-image {
  width: 100%;
  height: 299px;
}

.listing-info {
  padding: 16px 18px 16px 18px;
  height: 100%;
  background: map-get($colors, 'light-gray');

  .listing-title {
    font-size: 16px;
    text-align: left;
  }

  .listing-pricing {
    display: flex;
    align-items: center;
  }
}
</style>
