<template>
  <div class="cols">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.cols {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap);
}
</style>
