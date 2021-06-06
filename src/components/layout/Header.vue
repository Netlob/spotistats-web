<template>
  <header>
    <Container class="header-content">
      <div class="logo">
        <router-link to="/">
          <Logo />
        </router-link>
      </div>
      <nav>
        <router-link :to="{ name: 'Login' }">
          <Button type="primary" size="small">{{ $t('welcomeButton') }}</Button>
        </router-link>
      </nav>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: var(--body-lighter);
  padding: 10px;
  width: 100vw;

  .logo svg {
    display: block;
    width: 2rem;
    height: 2rem;
  }
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';

// Import components
import Container from './Container.vue';
import Button from '../base/buttons/Button.vue';
import Logo from '../base/Logo.vue';

export default defineComponent({
  components: {
    Container,
    Button,
    Logo,
  },
});
</script>
