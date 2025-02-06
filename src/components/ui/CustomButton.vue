<template>
  <button :class="buttonClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value)
  }
});

const buttonClass = computed(() => {
  return {
    'btn-primary': props.type === 'primary',
    'btn-secondary': props.type === 'secondary',
    'btn-tertiary': props.type === 'tertiary'
  };
});
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.btn-tertiary {
  font-size: $font-size-xxs;

  &:hover {
    color: map-get($colors, peach);
  }
}
</style>
