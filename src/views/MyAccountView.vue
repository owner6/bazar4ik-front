<template>
  <div class="my-account">
    <h1>My Account</h1>
    <div v-if="user">
      <!-- Add any other user information you want to display -->
    </div>
    <UserListings v-if="user" />
    <!-- Add this line to use UserListings component -->

    <div class="listings">
      <router-link to="/user-listings">Listings</router-link>
    </div>
  </div>
</template>

<script>
import UserListings from './UserListingsView.vue';

export default {
  name: 'MyAccount',
  components: {
    UserListings
  },
  data() {
    return {
      user: null // Initialize user data
    };
  },
  created() {
    this.fetchUserData(); // Fetch user data when the component is created
  },
  methods: {
    async fetchUserData() {
      try {
        //const response = await axios.get("); // Adjust the URL as necessary
        //this.user = response.data; // Assuming the response returns user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    formattedDate(date) {
      return new Date(date).toLocaleDateString(); // Format the date as needed
    }
  }
};
</script>

<style lang="scss">
.my-account {
  margin-top: 60px;
}
</style>
