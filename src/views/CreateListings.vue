<template>
  <div class="create-listing-page">
    <h1>Create New Listing</h1>
    <form @submit.prevent="createListing" class="listing-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          v-model="listing.title"
          id="title"
          placeholder="Enter listing title"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          v-model="listing.description"
          id="description"
          placeholder="Enter description"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input
          type="number"
          v-model="listing.price"
          id="price"
          placeholder="Enter price"
          required
        />
      </div>
      <div class="form-group">
        <label for="category">Category:</label>
        <select v-model="listing.category" id="category" required>
          <option value="" disabled>Select a category</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <button type="submit" class="submit-button">Create Listing</button>
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
      categories: ["Electronics", "Clothing", "Books", "Home Goods"],
    };
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

        // Відправка запиту на сервер для створення оголошення
        const token = localStorage.getItem("authToken");
        const response = await axios.post(
          `${process.env.VUE_APP_API_URL}/listings`,
          listingData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Якщо запит успішний
        console.log("Listing created successfully:", response.data);
        // Очистити форму або перенаправити користувача на іншу сторінку
        this.resetForm();
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
        image: null,
      };
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.create-listing-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .listing-form {
    display: flex;
    flex-direction: column;

    .form-group {
      margin-bottom: 15px;

      label {
        display: block;
        margin-bottom: 5px;
        font-weight: 600;
        color: #555;
      }

      input,
      textarea,
      select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
      }

      input[type="file"] {
        padding: 0;
      }
    }

    .submit-button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
}
</style>
