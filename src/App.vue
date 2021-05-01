<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';

// Import components
import Header from './components/layout/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
});
</script>
