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

// Обробник click
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
@import '@/assets/scss/main';

// Common button properties
%button-base {
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}

// Primary Button
.btn-primary {
  @extend %button-base;
  font-size: $font-size-xxs;
  background-color: map-get($colors, peach);
  color: $color-text;
  border: none;
  border-radius: 7px;
  padding: 12px 24px;

  &:hover {
    background-color: lighten(map-get($colors, peach), 10%);
  }

  &:active,
  &.pressed {
    background-color: (map-get($colors, peach), 5%);
  }

  &:disabled {
    background-color: map-get($colors, softgray);
    color: (map-get($colors, softgray), 30%);
  }
}

// Secondary Button
.btn-secondary {
  @extend %button-base;
  font-size: $font-size-xxs;
  background-color: transparent;
  color: map-get($colors, black);
  border: solid 1px map-get($colors, black);
  border-radius: 7px;
  padding: 12px 24px;
  margin-right: 0.5rem;

  &:hover {
    color: map-get($colors, peach);
    border-color: map-get($colors, peach);
  }

  &:active,
  &.pressed {
    color: map-get($colors, peach);
    border-color: map-get($colors, peach);
  }

  &:disabled {
    color: map-get($colors, softgray);
    border-color: map-get($colors, softgray);
  }
}

// Tertiary Button
.btn-tertiary {
  @extend %button-base;
  font-size: $font-size-xxs;
  background-color: transparent;
  border: none;
  padding: 12px 24px;

  &:hover {
    color: map-get($colors, peach);
  }

  &:active,
  &.pressed {
    color: map-get($colors, peach);
  }

  &:disabled {
    color: map-get($colors, softgray);
  }
}

// Arrow Button
.btn-arrow {
  @extend %button-base;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: map-get($colors, black);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: map-get($colors, peach);
  }

  &:active,
  &.pressed {
    background-color: (map-get($colors, peach), 5%);
  }

  &:disabled {
    background-color: map-get($colors, softgray);
    color: (map-get($colors, softgray), 20%);
  }
}
</style>
