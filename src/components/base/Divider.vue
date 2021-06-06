<template>
  <div class="divider">
    <span class="main-text">
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.divider {
  width: 100%;
  display: flex;
  margin: var(--gap-large) 0;
  align-items: center;

  .main-text {
    margin: 0 20px;
    color: var(--text-secondary);
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: var(--border);
  }
}
</style>
