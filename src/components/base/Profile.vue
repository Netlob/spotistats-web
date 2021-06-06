<template>
  <div class="profile">
    <img
      v-if="image.length > 0"
      :src="image[0].url"
      class="profile-picture"
      :alt="displayName"
    />
    <div v-else class="profile-picture">
      no image
      <!-- TODO: add a placeholder image or something -->
    </div>
    <div class="profile-info">
      <h2 class="profile-name">{{ displayName }}</h2>
      <p class="profile-bio">shi daggoetje geswiped</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .profile-picture {
    border-radius: 100%;
    height: 200px;
    width: 200px;
    object-fit: cover;
    background-color: var(--body);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.profile-info {
  margin-top: var(--gap-large);
  text-align: center;

  .profile-name {
    font-size: 2rem;
  }

  .profile-bio {
    font-size: 1.5rem;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    image: {
      type: String,
    },
    displayName: {
      type: String,
    },
  },
});
</script>
