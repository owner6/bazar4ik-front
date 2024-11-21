<template>
  <button @click="handleDelete">Delete</button>
</template>

<script>
import { deleteUserListing } from "@/api/listings";

export default {
  methods: {
    async handleDelete() {
      if (confirm("Are you sure you want to delete this listing?")) {
        try {
          await deleteUserListing(this.listingId);
          console.log("Listing deleted successfully");
          this.onDeleteSuccess();
        } catch (error) {
          console.error("Error deleting listing:", error);
          alert("Failed to delete the listing.");
        }
      }
    },
  },
  props: {
    listingId: {
      type: Number,
      required: true,
    },
    onDeleteSuccess: {
      type: Function,
      required: true,
    },
  },
};
</script>
