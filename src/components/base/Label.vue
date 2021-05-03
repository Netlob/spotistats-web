<template>
  <div class="label">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.label {
  width: max-content;
  height: 50px;
  background-color: var(--body-lighter);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-weight: 700;
}
</style>
