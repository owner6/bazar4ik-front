<template>
  <div class="create-listing-page">
    <div class="user-listings">
      <h1>Your Listings</h1>
      <nav>
        <router-link to="/inactive-listings">Deactivated Listings</router-link>
      </nav>
      <div v-if="userListings.length">
        <div
          v-for="listing in userListings"
          :key="listing.id"
          class="listing-item">
          <h3>{{ listing.title }}</h3>
          <p>{{ listing.description }}</p>
          <p><strong>Price:</strong> ${{ listing.price }}</p>
          <p><strong>Category:</strong> {{ listing.category }}</p>
          <button @click="openEditModal(listing)">Edit</button>

          <CustomButton
            :isActive="listing.isActive"
            :action="() => toggleListingStatus(listing.id)"
            @click="handleStatusToggled(listing.id, !listing.isActive)">
            {{ listing.isActive ? 'Deactivate' : 'Activate' }}
          </CustomButton>

          <DeleteListingButton
            :listingId="listing.id"
            :onDeleteSuccess="fetchUserListings" />
        </div>
      </div>
      <div v-else>
        <p>No listings found.</p>
      </div>
    </div>

    <!-- Edit Modal -->
    <div v-if="isEditing" class="edit-modal">
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
            :value="category">
            {{ category }}
          </option>
        </select>

        <button type="submit">Save Changes</button>
        <button type="button" @click="closeEditModal">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import {
  updateListing as apiUpdateListing,
  fetchUserListings as apiFetchUserListings,
  toggleListingStatus as apiToggleListingStatus
} from '@/features/listing/services/listingsApi';
import DeleteListingButton from '@/features/listing/components/DeleteListingButton.vue';
import CustomButton from '@/shared/components/CustomButton.vue';

const toast = useToast();

// Реактивні змінні
const listing = ref({
  title: '',
  description: '',
  price: '',
  category: ''
});

const userListings = ref([]);
const categories = ref(['Electronics', 'Clothing', 'Books', 'Home Goods']);
const isEditing = ref(false);

// Метод для скидання форми
const resetForm = () => {
  listing.value = {
    title: '',
    description: '',
    price: '',
    category: ''
  };
};

// Отримання списку оголошень
const fetchUserListings = async () => {
  try {
    userListings.value = await apiFetchUserListings();
  } catch (error) {
    console.error('Error fetching listings:', error);
  }
};

// Оновлення оголошення
const updateListing = async () => {
  try {
    await apiUpdateListing(listing.value.id, listing.value);
    toast.success('Listing updated successfully!');
    closeEditModal();
    await fetchUserListings(); // Оновити список після зміни
  } catch (error) {
    console.error('Error updating listing:', error);
  }
};

// Зміна статусу оголошення
const toggleListingStatus = async (listingId) => {
  try {
    await apiToggleListingStatus(listingId);
    await fetchUserListings(); // Оновити список після зміни статусу
  } catch (error) {
    console.error('Error toggling listing status:', error);
  }
};

// Відкриття модального вікна для редагування
const openEditModal = (listingData) => {
  isEditing.value = true;
  listing.value = { ...listingData };
};

// Закриття модального вікна
const closeEditModal = () => {
  isEditing.value = false;
  resetForm();
};

// Обробник зміни статусу
const handleStatusToggled = (listingId, isActive) => {
  if (!isActive) {
    userListings.value = userListings.value.filter(
      (listing) => listing.id !== listingId
    );
  }
  toast.success('Listing updated successfully!');
};

// Завантаження списку оголошень при монтуванні компонента
onMounted(() => {
  fetchUserListings();
});
</script>

<style lang="scss">
@import '@/assets/scss/main';

.create-listing-page {
  margin: 0 auto;
}

.user-listings {
  width: 1400px;
  border-radius: 12px;
  padding: 2rem;
}

.user-listings h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

/* Navigation styles */
nav {
  margin-bottom: 2rem;
}

nav a:hover {
  background: #e0e0e0;
  color: #333;
}

/* Listing grid */
.listing-item {
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.listing-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.listing-item h3 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.listing-item p {
  color: #666;
  margin-bottom: 0.5rem;
}

/* Modal styles */
.edit-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.edit-modal > div {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.edit-modal h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

/* Form styles */
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

/* Custom button variations */
.custom-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Responsive design */
@media (max-width: 768px) {
  .create-listing-page {
    padding: 1rem;
  }

  .user-listings {
    padding: 1rem;
  }

  .listing-item {
    padding: 1rem;
  }
}

/* Light/Dark mode support */
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }

  .user-listings {
    background: white;
  }

  .listing-item {
    background: white;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }

  .user-listings {
    background: #2a2a2a;
  }

  .listing-item {
    background: #2a2a2a;
    border-color: #333;
  }

  input,
  textarea,
  select {
    background: #333;
    border-color: #444;
    color: white;
  }
}
</style>
