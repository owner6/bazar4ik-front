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
      <div
        class="benefits"
        @mousedown="startScroll"
        @mousemove="moveScroll"
        @mouseup="stopScroll"
        @mouseleave="stopScroll">
        <div class="frame">
          <div class="logo-frame">
            <img
              src="../assets/icons/truck.svg" />
          </div>
          <div class="content-text">
            <h5>Free Shipping</h5>
            <description-text>From 50$</description-text>
          </div>
        </div>
        <div class="frame">
          <div class="logo-frame">
            <img
              src="../assets/icons/chat-two-bubbles-oval.svg" />
          </div>
          <div class="content-text">
            <h5>Support 24/7</h5>
            <description-text>Online 24</description-text>
          </div>
        </div>
        <div class="frame">
          <div class="logo-frame">
            <img
              src="../assets/icons/arrow-round-right.svg" />
          </div>
          <div class="content-text">
            <h5>Free return</h5>
            <description-text>365 days</description-text>
          </div>
        </div>
        <div class="frame">
          <div class="logo-frame">
            <img
              src="../assets/icons/coins-stack.svg" />
          </div>
          <div class="content-text">
            <h5>Easy Selling</h5>
            <description-text>Millions satisfied sellers</description-text>
          </div>
        </div>
        <div class="frame">
          <div class="logo-frame">
            <img
              src="../assets/icons/credit-card.svg" />
          </div>
          <div class="content-text">
            <h5>Online Payment</h5>
            <description-text>Secure payment</description-text>
          </div>
        </div>
        <div class="frame">
          <div class="logo-frame">
            <img src="../assets/icons/store.svg" />
          </div>
          <div class="content-text">
            <h5>Easy to Shop</h5>
            <description-text>99% satisfied buyers</description-text>
          </div>
        </div>
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
import SearchComponent from '@/shared/components/SearchPanel.vue';
import ListingCart from '@/features/listing/components/Listing.vue';
import { getAllListings } from '@/features/listing/services/listingsApi';

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
    },
    startScroll(event) {
      this.isScrolling = true;
      this.startX =
        event.pageX - this.$el.querySelector('.benefits').offsetLeft;
      this.scrollLeft = this.$el.querySelector('.benefits').scrollLeft;
    },
    moveScroll(event) {
      if (!this.isScrolling) return;
      event.preventDefault();
      const x = event.pageX - this.$el.querySelector('.benefits').offsetLeft;
      const walk = (x - this.startX) * 2;
      this.$el.querySelector('.benefits').scrollLeft = this.scrollLeft - walk;
    },
    stopScroll() {
      this.isScrolling = false;
    }
  },
  mounted() {
    this.fetchListings();
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main';

.home-view-container {
  position: relative;
}

.home-view {
  display: flex;
  gap: 16px;
  padding: 0 0px;
  flex-wrap: wrap;

  .section-left,
  .section-right {
    border-radius: 24px;
    margin-bottom: 7px;
  }

  .section-left {
    background-color: map-get($colors, 'light-green');
    width: 100%;
    max-width: 685px;
    text-align: left;
    flex: 1;
    padding: 40px;
    box-sizing: border-box;

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
    }
  }
}

.listings-container {
  margin-top: 40px;

  .loading {
    text-align: center;
  }

  .listings {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
}

.benefits {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  white-space: nowrap;
  padding-top: 16px;
  padding-bottom: 16px;

  &:active {
    cursor: grabbing;
  }

    .frame {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    align-items: center;
    flex: 0 0 auto;
    width: 300px;
    height: 100%;
    border-radius: 16px;
    padding: 32px 0 32px 0;
    background-color: map-get($colors, 'light-gray');
    min-width: 200px;
    user-select: none;
    font-size: 18px;

    .content-text {
      display: block;
      text-align: left;

      description-text {
        font-family: Poppins;
        font-size: 12px;
      }
    }
  }
}

.benefits::-webkit-scrollbar {
  display: none;
}
</style>
