<template>
  <article class="image-card">
    <div class="square-img">
      <img class="main-image" :src="image" />
      <h3 v-if="stickyTitle" class="sticky-title">{{ stickyTitle }}</h3>
    </div>
    <div class="card-info">
      <h2 class="title">{{ title }}</h2>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.image-card {
  width: 100%;
}

// The image HAS to be 1:1
// I would normally use a background image, but background images don't allow alt texts
.square-img {
  width: 100%;
  padding-bottom: 100%;
  position: relative;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .sticky-title {
    position: absolute;
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}

.main-image {
  border-radius: 25px;
}

.card-info {
  margin-top: var(--gap);

  .title {
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    stickyTitle: {
      type: String,
      required: false,
      default: '',
    },
  },
});
</script>
