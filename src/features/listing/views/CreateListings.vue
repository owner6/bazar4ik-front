<template>
  <div class="create-listing-page">
    <h1>Create New Listing</h1>
    <form class="listing-form" @submit.prevent="createListing">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          id="title"
          v-model="listing.title"
          type="text"
          placeholder="Enter listing title"
          required />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="listing.description"
          placeholder="Enter description"
          required />

        <label for="price">Price:</label>
        <input
          id="price"
          v-model="listing.price"
          type="number"
          placeholder="Enter price"
          required />
      </div>

      <div class="form-group">
        <label for="category">Category:</label>
        <select id="category" v-model="listing.category" required>
          <option value="" disabled>Select a category</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      <button type="submit" class="submit-button">Create Listing</button>
    </form>
  </div>
</template>

<script>
import { createListing } from '@/features/listing/services/listingsApi.js';

export default {
  data() {
    return {
      listing: {
        title: '',
        description: '',
        price: '',
        category: ''
      },
      categories: ['Electronics', 'Clothing', 'Books', 'Home Goods']
    };
  },
  methods: {
    async createListing() {
      try {
        const listingData = {
          title: this.listing.title,
          description: this.listing.description,
          price: this.listing.price,
          category: this.listing.category
        };

        const response = await createListing(listingData);

        console.log('Listing created successfully:', response);
        this.resetForm();
        this.$router.push('/user-listings');
      } catch (error) {
        console.error('Error creating listing:', error);
      }
    },
    resetForm() {
      this.listing = {
        title: '',
        description: '',
        price: '',
        category: '',
        image: null
      };
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main';

.create-listing-page {
  margin: 0 auto;
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

      input[type='file'] {
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
