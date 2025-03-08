<template>
  <div class="inactive-listings">
    <h1>Deactivated Listings</h1>

    <ul v-if="listings.length && !loading" class="listings">
      <li v-for="listing in listings" :key="listing.id" class="listing">
        <h2>{{ listing.title }}</h2>
        <p>{{ listing.description }}</p>
        <p><strong>Price:</strong> ${{ listing.price }}</p>
        <p><strong>Category:</strong> {{ listing.category }}</p>
        <DeactivateListingButton
          :listingId="listing.id"
          :isActive="listing.isActive"
          @statusToggled="handleStatusToggled" />
      </li>
    </ul>

    <div v-else-if="!loading" class="no-listings">
      No deactivated listings found.
    </div>
  </div>
</template>

<script>
import { fetchInactiveListings } from '@/features/listing/services/listingsApi';
import DeactivateListingButton from '@/features/listing/components/DeactivateListingButton.vue';
import { useToast } from 'vue-toastification';

export default {
  name: 'InactiveListingsView',
  components: { DeactivateListingButton },
  data() {
    return {
      listings: [],
      loading: false,
      error: null,
      isFetching: false
    };
  },
  methods: {
    async fetchInactiveListings() {
      try {
        const data = await fetchInactiveListings();
        this.listings = data.filter((listing) => !listing.isActive);
      } catch (err) {
        this.error = 'Failed to load deactivated listings.';
        console.error(err);
      }
    },
    async handleStatusToggled(listingId, isActive) {
      const toast = useToast();
      if (isActive) {
        this.listings = this.listings.filter(
          (listing) => listing.id !== listingId
        );
      }
      await this.fetchInactiveListings();
      toast.success('Listing updated successfully!');
    }
  },
  mounted() {
    this.fetchInactiveListings();
  }
};
</script>

<style scoped>
.inactive-listings {
  padding: 1rem;
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
