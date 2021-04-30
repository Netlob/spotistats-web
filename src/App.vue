<template>
  <Header />
  <router-view />
</template>

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
