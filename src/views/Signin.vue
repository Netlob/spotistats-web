<template>
  <Container>
    <div class="card-wrapper">
      <Card class="card larger-vertical-padding">
        <div class="qr">
          <Qrcode
            :value="qrdata"
            background="transparent"
            foreground="white"
            level="H"
            size="180"
            renderAs="svg"
          />
          <p class="qr-info">Scan the QR code with the Spotistats app</p>
        </div>
        <Button @click="validateQr" class="scanned-button"
          >I've scanned the QR-code with the app</Button
        >
        <Divider>or</Divider>
        <Button>Sign in with Spotify</Button>
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

  .qr-info {
    width: 80%;
    font-size: 0.8rem;
    text-align: center;
    margin: 0 auto;
    color: var(--text-secondary);
  }
}

.scanned-button {
  margin-top: var(--gap);
}
</style>

<script lang="ts">
import { uuid } from 'vue-uuid';
import { defineComponent } from 'vue';
import Qrcode from 'qrcode.vue';
import Card from '../components/layout/Card.vue';
import Container from '../components/layout/Container.vue';
import Button from '../components/base/buttons/Button.vue';
import Divider from '../components/base/Divider.vue';

export default defineComponent({
  name: 'Signin',
  data() {
    return {
      qrdata: '',
      token: '',
      secret: uuid.v4(),
    };
  },
  components: {
    Card,
    Container,
    Button,
    Qrcode,
    Divider,
  },
  async created() {
    this.qrdata = (
      await fetch(
        `https://beta-api.spotistats.app/api/v1/auth/qr?secret=${this.secret}`,
      ).then((res) => res.json())
    ).data;
  },
  methods: {
    async validateQr() {
      this.token = (
        await fetch('https://beta-api.spotistats.app/api/v1/auth/qr', {
          method: 'POST',
          body: JSON.stringify({ data: this.qrdata, secret: this.secret }),
          headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json())
      ).data;
      // eslint-disable-next-line no-alert
      alert(this.token);
    },
  },
});
</script>
