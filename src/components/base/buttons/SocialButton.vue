<template>
  <button class="social-button" @click.prevent="(e) => $emit('click', e)">
    <span class="md">{{ icon }}</span>
  </button>
</template>

<style lang="scss" scoped>
.social-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
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
