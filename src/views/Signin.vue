<template>
  <Container>
    <div class="card-wrapper">
      <Card class="card larger-vertical-padding">
        <div class="qr">
          <Qrcode
            value="https://spotistats.app"
            background="transparent"
            foreground="lightgray"
            level="H"
            size="180"
          />
          <p class="qr-info">Scan the QR code with the Spotistats app</p>
        </div>
        <!-- <hr /> -->
        <Button size="large">Sign in with Spotify</Button>
      </Card>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.card-wrapper {
  width: 300px;
  margin: 80px auto;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.qr {
  width: 180px;
  margin: 0 auto;
  margin-bottom: var(--gap-large);

  .qr-info {
    width: 80%;
    font-size: 0.8rem;
    text-align: center;
    margin: 0 auto;
    color: var(--text-secondary);
  }

}

hr {
  width: 100%;
  height: 1px;
  border: 0;
  background: var(--border);
  margin: var(--gap-large) 0;
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
