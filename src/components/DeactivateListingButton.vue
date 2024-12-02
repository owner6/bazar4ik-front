<template>
  <Alert ref="alert" />
  <button @click="handleDeactivate">Deactivate</button>
</template>

<script>
import Alert from '@/components/ui/AlertMessage.vue';
import { deactivateUserListing } from '@/api/listings';
import { useToast } from 'vue-toastification';

export default {
  components: { Alert },
  methods: {
    async handleDeactivate() {
      const toast = useToast();
      if (confirm('Are you sure you want to delete this listing?')) {
        try {
          await deactivateUserListing(this.listingId);
          toast.success('Listing deactivate successfully!');
          this.onDeactivateSuccsess();
        } catch (error) {
          toast.error('Error deleting listing:', error);
        }
      }
    }
  }
};
</script>
