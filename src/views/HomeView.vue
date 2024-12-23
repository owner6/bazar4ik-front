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
          <div
            v-for="listing in listings"
            :key="listing.id"
            class="listing-item">
            <h2>{{ listing.title }}</h2>
            <p><strong>Price:</strong> ${{ listing.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from '../components/SearchPanel.vue';
import { getAllListings } from '../api/listings';

export default {
  name: 'HomeView',
  components: {
    SearchComponent
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

@media (max-width: 1024px) {
  .home-view {
    padding: 0 16px;

    .section-left {
      padding: 20px;
    }
  }
}

@media (max-width: 768px) {
  .home-view {
    flex-direction: column;

    .section-left {
      padding: 20px;
    }

    .section-right {
      margin-top: 16px;
    }
  }
}

@media (max-width: 480px) {
  .home-view {
    .section-left {
      padding: 20px 10px;

      .section-content {
        h1 {
          font-size: 24px;
        }

        .search {
          flex-direction: column;

          search-component {
            margin-top: 16px;
          }
        }
      }
    }
  }
}

.listings-container {
  margin-top: 40px;

  .loading {
    text-align: center;
    font-size: 18px;
    color: map-get($colors, 'gray-dark');
  }

  .error {
    text-align: center;
    font-size: 18px;
    color: map-get($colors, 'red');
  }

  .listings {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    .listing-item {
      background-color: map-get($colors, 'white');
      border: 1px solid map-get($colors, 'gray-light');
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 16px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
      }

      h2 {
        font-size: 20px;
        color: map-get($colors, 'gray-dark');
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        color: map-get($colors, 'gray');
        margin-bottom: 8px;

        &:last-child {
          font-weight: bold;
          color: map-get($colors, 'green');
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .listings-container {
    .listings {
      gap: 16px;

      .listing-item {
        padding: 12px;
        h2 {
          font-size: 18px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .listings-container {
    .listings {
      gap: 12px;

      .listing-item {
        padding: 10px;
        h2 {
          font-size: 16px;
        }

        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
