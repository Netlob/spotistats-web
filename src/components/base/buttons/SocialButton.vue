<template>
  <button class="social-button" @click.prevent="(e) => $emit('click', e)">
    <i :class="icon"></i>
  </button>
</template>

<style lang="scss" scoped>
.social-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-button-bg);
  color: var(--primary-button-text);
  border: none;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-button-bg-hover);
  }

  &:active {
    background: var(--primary-button-bg-active);
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialButton',
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
