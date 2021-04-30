<template>
  <div id="home">
    <Container>
      Hello world
    </Container>
  </div>
</template>

<style lang="scss" scoped>
#home {
  margin: 80px 0;
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';

// Import components
import Container from '../components/layout/Container.vue';

export default defineComponent({
  components: {
    Container,
  },
});
</script>
