<template>
  <div class="inactive-listings">
    <h1>Deactivated Listings</h1>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="loading" class="loading">Loading...</div>

    <ul v-if="listings.length && !loading" class="listings">
      <li v-for="listing in listings" :key="listing.id" class="listing">
        <h2>{{ listing.title }}</h2>
        <p>{{ listing.description }}</p>
        <p><strong>Price:</strong> ${{ listing.price }}</p>
        <p><strong>Category:</strong> {{ listing.category }}</p>
      </li>
    </ul>

    <div v-else-if="!loading" class="no-listings">
      No deactivated listings found.
    </div>
  </div>
</template>

<script>
import { fetchInactiveListings } from '@/api/listings';

export default {
  name: 'InactiveListingsView',
  data() {
    return {
      listings: [],
      loading: false,
      error: null
    };
  },
  methods: {
    async loadInactiveListings() {
      this.loading = true;
      this.error = null;
      try {
        const data = await fetchInactiveListings();
        this.listings = data.filter((listing) => !listing.isActive);
      } catch (err) {
        this.error = 'Failed to load deactivated listings.';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  },
  mounted() {
    this.loadInactiveListings();
  }
};
</script>

<style scoped>
.inactive-listings {
  padding: 1rem;
}

.error {
  color: red;
  margin: 1rem 0;
}

.loading {
  margin: 1rem 0;
}

.listings {
  list-style: none;
  padding: 0;
}

.listing {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.no-listings {
  color: #666;
  margin: 1rem 0;
}
</style>
