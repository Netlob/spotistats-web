<template>
  <button class="app-button" :data-type="type">
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

  &[data-type='primary'] {
    background: var(--primary-button-bg);
    color: var(--primary-button-text);
    transition: background 0.15s;

    &:hover {
      background: var(--primary-button-bg-hover);
    }

    &:active {
      background: var(--primary-button-bg-active);
    }
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
  },
});
</script>
