<template>
  <button @click="handleToggle" :disabled="loading">
    {{ loading ? 'Processing...' : authButtonText }}
  </button>
</template>

<script>
import { ref, computed } from 'vue';
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
  setup(props, { emit }) {
    const loading = ref(false);

    const authButtonText = computed(() => {
      return props.isActive ? 'Deactivate' : 'Activate';
    });

    const handleToggle = async () => {
      loading.value = true;
      try {
        await toggleListingStatus(props.listingId);
        // Емісія події для оновлення списку в батьківському компоненті
        emit('statusToggled', props.listingId);
      } catch (error) {
        console.error('Failed to toggle listing status:', error);
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      authButtonText,
      handleToggle
    };
  }
};
</script>
