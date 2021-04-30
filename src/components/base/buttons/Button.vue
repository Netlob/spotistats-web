<template>
  <button class="app-button" :data-type="type" :data-size="size" @click="(e) => $emit('click', e)">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.app-button {
  border: 0;
  border-radius: 6px;
  padding: 8px 20px;
  font-weight: bold;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s;

  // Color schemes for the button
  &[data-type='primary'] {
    background: var(--primary-button-bg);
    color: var(--primary-button-text);

    &:hover {
      background: var(--primary-button-bg-hover);
    }

    &:active {
      background: var(--primary-button-bg-active);
    }
  }

  // Sizes
  &[data-size='large'] {
    width: 100%;
    padding: 12px 20px;
    border-radius: 15px;
    font-size: 1rem;
  }
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary',
    },
    size: {
      type: String,
      required: false,
      default: '',
    },
  },
});
</script>
