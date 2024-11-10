<template>
  <div class="create-listing-page">
    <div class="user-listings">
      <h1>Your Listings</h1>
      <div v-if="userListings.length">
        <div
          v-for="listing in userListings"
          :key="listing.id"
          class="listing-item"
        >
          <h3>{{ listing.title }}</h3>
          <p>{{ listing.description }}</p>
          <p><strong>Price:</strong> ${{ listing.price }}</p>
          <p><strong>Category:</strong> {{ listing.category }}</p>
          <button @click="openEditModal(listing)">Edit</button>
        </div>
      </div>
      <div v-else>
        <p>No listings found.</p>
      </div>
    </div>
    <EditListingView
      v-if="isEditing"
      :listing="listing"
      :categories="categories"
      @close="closeEditModal"
      @update="updateListing"
    />
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
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <button type="submit">Save Changes</button>
      <button type="button" @click="closeEditModal">Cancel</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      listing: {
        title: "",
        description: "",
        price: "",
        category: "",
      },
      userListings: [],
      categories: ["Electronics", "Clothing", "Books", "Home Goods"],
      isEditing: false, // Track if editing mode is active
    };
  },
  components: {},
  mounted() {
    this.fetchUserListings();
  },

  methods: {
    async createListing() {
      try {
        const listingData = { ...this.listing };
        const token = localStorage.getItem("authToken");

        const response = await axios.post(
          `${process.env.VUE_APP_API_URL}/create-listings`,
          listingData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Listing created successfully:", response.data);
        this.resetForm();
        this.fetchUserListings();
      } catch (error) {
        console.error("Error creating listing:", error);
      }
    },
    resetForm() {
      this.listing = {
        title: "",
        description: "",
        price: "",
        category: "",
      };
    },
    async fetchUserListings() {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/listings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.userListings = response.data;
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    },
    openEditModal(listing) {
      this.isEditing = true;
      this.listing = { ...listing };
    },
    closeEditModal() {
      this.isEditing = false;
      this.resetForm();
    },

    async updateListing(updatedListing) {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.put(
          `${process.env.VUE_APP_API_URL}/listings/${updatedListing.id}`,
          updatedListing,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Listing updated successfully:", response.data);
        this.fetchUserListings();
        this.closeEditModal();
      } catch (error) {
        console.error("Error updating listing:", error);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.user-listings {
  margin-top: 30px;

  .listing-item {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 4px;

    h3 {
      margin: 0;
      font-size: 20px;
      color: #333;
    }

    p {
      margin: 5px 0;
      color: #555;
    }

    strong {
      font-weight: 600;
    }
  }
}

.edit-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;

  h2 {
    margin-top: 0;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 10px;
      font-weight: 600;
    }

    input,
    textarea,
    select {
      margin-top: 5px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      margin-top: 15px;
      padding: 10px;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 4px;
      cursor: pointer;

      &:last-child {
        background-color: #ccc;
      }
    }
  }
}
</style>
