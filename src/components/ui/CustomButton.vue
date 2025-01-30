<template>
  <div class="custom-button">
    <span>{{ buttonText }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineOptions } from 'vue';

// Оголошення пропсів
defineProps({
  buttonText: {
    type: String,
    default: 'SIGN UP | LOG IN'
  }
});

// Оголошення імені компонента
defineOptions({
  name: 'CustomButton'
});
</script>

<style scoped></style>
