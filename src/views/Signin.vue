<template>
  <Container>
    <div class="card-wrapper">
      <Card class="card">
        <div class="qr">
          <Qrcode
            value="https://spotistats.app"
            background="transparent"
            foreground="white"
            level="H"
            size="180"
          />
        </div>
        <Button>Sign in with Spotify</Button>
      </Card>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.card-wrapper {
  width: 300px;
  margin: 0 auto;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Qrcode from 'qrcode.vue';
import Card from '../components/layout/Card.vue';
import Container from '../components/layout/Container.vue';
import Button from '../components/base/buttons/Button.vue';

export default defineComponent({
  name: 'Signin',
  components: {
    Card,
    Container,
    Button,
    Qrcode,
  },
});
</script>
