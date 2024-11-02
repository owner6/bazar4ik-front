<template>
  <div class="create-listing-page">
    <h2>Create New Listing</h2>
    <form @submit.prevent="createListing" class="listing-form">
      <!-- form create ad -->
    </form>

    <div class="user-listings">
      <h2>Your Listings</h2>
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
        </div>
      </div>
      <div v-else>
        <p>No listings found.</p>
      </div>
    </div>
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
      userListings: [], // add масив for save ads user
      categories: ["Electronics", "Clothing", "Books", "Home Goods"],
    };
  },

  mounted() {
    this.fetchUserListings(); // Викликати metod отримання ads при завантаженні components
  },

  methods: {
    async createListing() {
      try {
        const listingData = {
          title: this.listing.title,
          description: this.listing.description,
          price: this.listing.price,
          category: this.listing.category,
        };

        const token = localStorage.getItem("authToken");
        const response = await axios.post(
          `${process.env.VUE_APP_API_URL}/create-ads`,
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
        this.fetchUserListings(); // Оновити список оголошень після створення нового
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
          `${process.env.VUE_APP_API_URL}/user-ads`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.userListings = response.data; // Зберігаємо отримані оголошення в масив userListings
      } catch (error) {
        console.error("Error fetching listings:", error);
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
</style>
