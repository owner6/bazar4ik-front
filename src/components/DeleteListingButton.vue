<template>
  <Alert ref="alert" />
  <button @click="handleDelete">Delete</button>
</template>

<script>
import Alert from '@/components/ui/AlertMessage.vue';
import { deleteUserListing } from '@/api/listings';
import { useToast } from 'vue-toastification';

export default {
  components: { Alert },
  methods: {
    async handleDelete() {
      const toast = useToast();
      if (confirm('Are you sure you want to delete this listing?')) {
        try {
          await deleteUserListing(this.listingId);
          toast.success('Listing delete successfully!');
          this.onDeleteSuccess();
        } catch (error) {
          toast.error('Error deleting listing:', error);
        }
      }
    }
  },
  props: {
    listingId: {
      type: Number,
      required: true
    },
    onDeleteSuccess: {
      type: Function,
      required: true
    }
  }
};
</script>
