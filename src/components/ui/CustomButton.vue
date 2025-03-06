<template>
  <button :class="buttonClass" @click="handleClick">
    <slot />
  </button>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value)
  },
  isActive: Boolean,
  action: Function
});

const emits = defineEmits(['click']);

// Обробник кліку
const handleClick = () => {
  if (props.action) {
    props.action(); // Викликаємо передану функцію
  }
  emits('click'); // Випромінюємо подію click
};

// Класи для кнопки
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

.btn-secondary {
  font-size: $font-size-xxs;
  border: solid 1px;
  border-radius: 7px;
  padding: 12px 24px 12px 24px;
  &:hover {
    color: map-get($colors, peach);
  }
}
</style>
