<template>
  <div class="image-card-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.image-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: var(--gap-large);
}
</style>
