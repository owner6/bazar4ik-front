<template>
  <div class="edit-listing-container">
    <h1>Редактирование товара</h1>
    <form @submit.prevent="saveChanges" class="edit-listing-form">
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
      <button type="submit" class="save-button">Сохранить</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
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
  created() {
    this.fetchListing();
  },
  methods: {
    // GET request to fetch the specific listing by ID before editing
    async fetchListing() {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/listings/${this.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Populate the form fields with the listing data
        this.listing = {
          title: response.data.title,
          description: response.data.description,
          price: response.data.price,
          category: response.data.category,
        };
      } catch (error) {
        console.error("Ошибка при загрузке товара:", error);
      }
    },
    async saveChanges() {
      try {
        const token = localStorage.getItem("authToken");
        await axios.put(
          `${process.env.VUE_APP_API_URL}/listings/${this.id}`,
          this.listing,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Товар успешно обновлён!");
        this.$router.push("/listings");
      } catch (error) {
        console.error("Ошибка при обновлении товара:", error);
      }
    },
  },
};
</script>

<style scoped>
.edit-listing-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
}

.edit-listing-form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #666;
}

.form-input,
.form-textarea {
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.save-button {
  padding: 10px 15px;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: #0056b3;
}
</style>
