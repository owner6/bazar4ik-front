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
      if (confirm('Are you sure you want to deactivate this listing?')) {
        try {
          await deactivateUserListing(this.listingId);
          toast.success('Listing deactivate successfully!');
          this.onDeactivateSuccess();
        } catch (error) {
          toast.error('Error deactivate listing:', error);
        }
      }
    }
  },
  props: {
    listingId: {
      type: Number,
      required: true
    },
    onDeactivateSuccess: {
      type: Function,
      required: true
    }
  }
};
</script>
