<template>
  <div class="container">
    <div class="home-view-container">
      <div class="home-view">
        <section class="section-left">
          <div class="section-content">
            <h1>Everything<br />can be bought and sold here!</h1>
            <div class="search">
              <search-component @search="handleSearch"></search-component>
            </div>
          </div>
        </section>
        <section class="section-right">
          <img src="@/assets/images/image-section-right.jpg" />
        </section>
      </div>
      <div class="listings-container">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else class="listings">
          <ListingCart
            v-for="listing in listings"
            :key="listing.id"
            :listing="listing" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from '../components/SearchPanel.vue';
import ListingCart from '../components/ListingCart';
import { getAllListings } from '../api/listings';

export default {
  name: 'HomeView',
  components: {
    SearchComponent,
    ListingCart
  },
  data() {
    return {
      listings: [],
      loading: true,
      error: null
    };
  },
  methods: {
    async fetchListings() {
      try {
        this.listings = await getAllListings();
        this.loading = false;
      } catch (err) {
        this.error = 'Failed to load listings.';
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchListings();
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

/* Залишаємо тільки стилі, які стосуються HomeView */
.home-view-container {
  position: relative;
}

.home-view {
  display: flex;
  gap: 16px;
  padding: 0 27px;
  flex-wrap: wrap;

  .section-left,
  .section-right {
    border-radius: 24px;
  }

  .section-left {
    background-color: map-get($colors, 'light-green');
    width: 100%;
    max-width: 685px;
    text-align: left;
    flex: 1;
    padding: 40px;
    box-sizing: border-box;
    margin-bottom: 7px;

    .section-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      .search {
        display: flex;
        align-items: center;

        search-component {
          flex-grow: 1;
          justify-content: center;
          padding: map-get($spacings, 'md');
          border: none;
          border-radius: 4px;
          background-color: map-get($colors, 'peach');
          font-size: 16px;
        }
      }
    }
  }

  .section-right {
    flex: 1;
    min-width: 300px;

    img {
      width: 100%;
      height: auto;
      border-radius: 24px;
    }
  }
}

.listings-container {
  margin-top: 40px;

  .loading {
    text-align: center;
  }

  .listings {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style>
