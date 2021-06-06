<template>
  <div class="row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  gap: var(--gap);
}
</style>
