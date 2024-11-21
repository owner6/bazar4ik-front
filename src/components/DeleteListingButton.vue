<template>
  <Alert ref="alert" />
  <button @click="handleDelete">Delete</button>
</template>

<script>
import Alert from "@/components/ui/AlertMessage.vue";
import { deleteUserListing } from "@/api/listings";

export default {
  components: { Alert },
  methods: {
    async handleDelete() {
      if (confirm("Are you sure you want to delete this listing?")) {
        try {
          await deleteUserListing(this.listingId);
          this.$refs.alert.showAlert(
            "Listing deleted successfully!",
            "success"
          );
          this.onDeleteSuccess();
        } catch (error) {
          console.error("Error deleting listing:", error);
          this.$refs.alert.showAlert("Failed to delete the listing.", "error");
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
