<template>
  <div class="user-listings-page">
    <div class="user-listings">
      <h1>Your Listings</h1>

      <!-- Перемикач active and deactive listings -->
      <div class="view-mode-toggle">
        <button
          @click="setViewMode('active')"
          class="btn-tertiary"
        >
          Active Listings
        </button>
        <button
          @click="setViewMode('inactive')"
          class="btn-tertiary"
        >
          Deactivated Listings
        </button>
      </div>

      <!-- list active listings -->
      <div v-if="viewMode === 'active'">
        <h2>Active Listings</h2>
        <div v-if="userListings.length && !loading" class="listings">
          <div
            v-for="listing in userListings"
            :key="listing.id"
            class="listing-item"
          >
            <h3>{{ listing.title }}</h3>
            <p>{{ listing.description }}</p>
            <p><strong>Price:</strong> ${{ listing.price }}</p>
            <p><strong>Category:</strong> {{ listing.category }}</p>

            <button @click="openEditModal(listing)" class="btn-secondary">
              Edit
            </button>
            <button
              @click="toggleListingStatus(listing.id)"
              class="btn-secondary"
            >
              {{ listing.isActive ? 'Deactivate' : 'Activate' }}
            </button>
            <button @click="deleteListing(listing.id)" class="btn-secondary">
              Delete
            </button>
          </div>
        </div>
        <div v-else-if="!loading">
          <p>No active listings found.</p>
        </div>
      </div>

      <!-- list deactivated listings -->
      <div v-else>
        <h2>Deactivated Listings</h2>
        <div v-if="inactiveListings.length && !loading" class="listings">
          <div
            v-for="listing in inactiveListings"
            :key="listing.id"
            class="listing-item"
          >
            <h3>{{ listing.title }}</h3>
            <p>{{ listing.description }}</p>
            <p><strong>Price:</strong> ${{ listing.price }}</p>
            <p><strong>Category:</strong> {{ listing.category }}</p>

            <button @click="openEditModal(listing)" class="btn-secondary">
              Edit
            </button>
            <button
              @click="toggleListingStatus(listing.id)"
              class="btn-secondary"
            >
              {{ listing.isActive ? 'Deactivate' : 'Activate' }}
            </button>
            <button @click="deleteListing(listing.id)" class="btn-secondary">
              Delete
            </button>
          </div>
        </div>
        <div v-else-if="!loading">
          <p>No deactivated listings found.</p>
        </div>
      </div>

      <!-- Modal window for editing -->
      <div v-if="isEditing" class="edit-modal">
        <div class="modal-content">
          <h2>Edit Listing</h2>
          <form @submit.prevent="updateListing">
            <label>Title:</label>
            <input v-model="listing.title" required />

            <label>Description:</label>
            <textarea v-model="listing.description" required></textarea>

            <label>Price:</label>
            <input type="number" v-model="listing.price" required />

            <label>Category:</label>
            <select v-model="listing.category" required>
              <option
                v-for="category in categories"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>

            <button type="submit">Save Changes</button>
            <button type="button" @click="closeEditModal">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import {
  fetchUserListings as apiFetchUserListings,
  fetchInactiveListings,
  updateListing as apiUpdateListing,
  toggleListingStatus as apiToggleListingStatus,
  deleteUserListing,
} from '@/features/listing/services/listingsApi';

const toast = useToast();

// reactive variables
const viewMode = ref('active'); // Режим перегляду: 'active' or 'inactive'
const userListings = ref([]); // list active listings
const inactiveListings = ref([]); // list deactive listings
const loading = ref(false); // status download
const isEditing = ref(false); // status modal window
const listing = ref({
  id: null,
  title: '',
  description: '',
  price: '',
  category: '',
  isActive: true,
});
const categories = ref(['Electronics', 'Clothing', 'Books', 'Home Goods']);

// reset forms
const resetForm = () => {
  listing.value = {
    id: null,
    title: '',
    description: '',
    price: '',
    category: '',
    isActive: true,
  };
};

// download active listings
const fetchActiveListings = async () => {
  loading.value = true;
  try {
    userListings.value = await apiFetchUserListings();
  } catch (error) {
    console.error('Error fetching active listings:', error);
    toast.error('Failed to load active listings.');
  } finally {
    loading.value = false;
  }
};

// download deactivated listings
const fetchInactiveListingsData = async () => {
  loading.value = true;
  try {
    inactiveListings.value = await fetchInactiveListings();
  } catch (error) {
    console.error('Error fetching inactive listings:', error);
    toast.error('Failed to load deactivated listings.');
  } finally {
    loading.value = false;
  }
};

// Перемикання mode перегляду
const setViewMode = (mode) => {
  viewMode.value = mode;
  if (mode === 'active') {
    fetchActiveListings();
  } else {
    fetchInactiveListingsData();
  }
};

// open modal window for editing
const openEditModal = (listingData) => {
  isEditing.value = true;
  listing.value = { ...listingData };
};

// close modal window
const closeEditModal = () => {
  isEditing.value = false;
  resetForm();
};

// update listing
const updateListing = async () => {
  try {
    await apiUpdateListing(listing.value.id, listing.value);
    toast.success('Listing updated successfully!');
    closeEditModal();
    if (viewMode.value === 'active') {
      await fetchActiveListings();
    } else {
      await fetchInactiveListingsData();
    }
  } catch (error) {
    console.error('Error updating listing:', error);
    toast.error('Error updating listing');
  }
};

// Зміна status listing
const toggleListingStatus = async (listingId) => {
  try {
    await apiToggleListingStatus(listingId);
    toast.success('Listing status updated successfully!');
    if (viewMode.value === 'active') {
      await fetchActiveListings();
    } else {
      await fetchInactiveListingsData();
    }
  } catch (error) {
    console.error('Error toggling listing status:', error);
    toast.error('Error toggling listing status');
  }
};

// delete listing
const deleteListing = async (listingId) => {
  if (confirm('Are you sure you want to delete this listing?')) {
    try {
      await deleteUserListing(listingId);
      toast.success('Listing deleted successfully!');
      if (viewMode.value === 'active') {
        await fetchActiveListings();
      } else {
        await fetchInactiveListingsData();
      }
    } catch (error) {
      console.error('Error deleting listing:', error);
      toast.error('Error deleting listing');
    }
  }
};

// download active listings при монтуванні component
onMounted(() => {
  fetchActiveListings();
});
</script>

<style lang="scss">
@import '@/assets/scss/main';

.user-listings-page {
  margin: 0 auto;
}

.user-listings {
  width: 1400px;
  border-radius: 12px;
}

.listing-item {
  border: 1px solid map-get($colors, light-gray);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.listing-item:hover {
  box-shadow: 0 4px 12px map-get($colors, light-gray);
}

.listing-item h3 {
  font-size: 1.25rem;
  color: $color-text;
  margin-bottom: 0.5rem;
}

.listing-item p {
  color: $color-border;
  margin-bottom: 0.5rem;
}

/* Modal styles */
.edit-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $color-text;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: $color-base;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 1400px;
}

.edit-modal h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: 500;
  color: #555;
}

input,
textarea,
select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

/* Responsive design */
@media (max-width: 768px) {
  .user-listings {
    width: 100%;
    padding: 1rem;
  }

  .listing-item {
    padding: 1rem;
  }
}

/* Light/Dark mode support */
@media (prefers-color-scheme: dark) {
  .user-listings {
    background: #2a2a2a;
  }

  .listing-item {
    background: #2a2a2a;
    border-color: #333;
  }

  .modal-content {
    background: #2a2a2a;
    color: rgba(255, 255, 255, 0.87);
  }

  input,
  textarea,
  select {
    background: #333;
    border-color: #444;
    color: white;
  }

  .btn-secondary {
    background: #444;
    color: white;
  }

  .btn-secondary:hover {
    background: #555;
  }
}
</style>