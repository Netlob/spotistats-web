<template>
  <router-link :to="link" class="link">
    <article class="image-card">
      <div class="square-img">
        <img :src="image" />
        <h3 v-if="stickyCorner" class="sticky-corner">{{ stickyCorner }}</h3>
        <h2 v-if="stickyTitle" class="sticky-title">{{ stickyTitle }}</h2>
        <p v-if="stickyDesc" class="sticky-desc">{{ stickyDesc }}</p>
      </div>
      <div class="card-info">
        <h2 class="title">{{ title }}</h2>
        <p class="desc">{{ desc }}</p>
      </div>
    </article>
  </router-link>
</template>

<style lang="scss" scoped>
.image-card {
  width: 100%;
}

.link {
  text-decoration: none;
  color: inherit;
}

// The image HAS to be 1:1
// I would normally use a background image, but background images don't allow alt texts
.square-img {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 25px;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.85);
  }

  .sticky-corner {
    position: absolute;
    font-size: 1.5em;
    top: 10px;
    right: 10px;
    text-shadow: 0 0 30px rgba(0, 0, 0, 1);
  }

  .sticky-title {
    position: absolute;
    transform: translateX(50%);
    font-size: 2rem;
    bottom: 25px;
    right: 50%;
    text-shadow: 0 0 30px rgba(0, 0, 0, 1);
  }

  .sticky-desc {
    position: absolute;
    transform: translateX(50%);
    font-size: 1.5em;
    font-weight: 500;
    bottom: 5px;
    right: 50%;
    text-shadow: 0 0 30px rgba(0, 0, 0, 1);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.card-info {
  margin-top: var(--gap);

  .title {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .desc {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    desc: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    stickyCorner: {
      type: String,
      required: false,
      default: '',
    },
    stickyTitle: {
      type: String,
      required: false,
      default: '',
    },
    stickyDesc: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: String,
      required: false,
      default: '',
    },
  },
});
</script>
