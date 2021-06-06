<template>
  <div class="column">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
</style>
