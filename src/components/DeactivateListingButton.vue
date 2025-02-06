<template>
  <button @click="handleToggle" :disabled="loading">
    {{ loading ? 'Processing...' : authButtonText }}
  </button>
</template>

<script>
import { toggleListingStatus } from '@/api/listings';

export default {
  name: 'DeactivateListingButton',
  props: {
    listingId: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    authButtonText() {
      return this.isActive ? 'Deactivate' : 'Activate';
    }
  },
  methods: {
    async handleToggle() {
      this.loading = true;
      try {
        await toggleListingStatus(this.listingId);
        // Емісія події для оновлення списку в батьківському компоненті
        this.$emit('statusToggled', this.listingId);
      } catch (error) {
        console.error('Failed to toggle listing status:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
