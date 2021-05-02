<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 20px;
  border-radius: 25px;
  background: var(--body-lighter);
}
.card.larger-vertical-padding {
  padding: 40px 20px;
  padding-top: 50px;
}
</style>
