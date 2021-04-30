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
  -webkit-box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.5);
}
</style>
