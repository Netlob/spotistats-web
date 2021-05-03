<template>
  <Container>
    <div class="card-wrapper">
      <Card class="card larger-vertical-padding">
        <div class="qr">
          <div class="qr-border">
            <Qrcode
              :value="qrdata"
              background="white"
              foreground="#222228"
              size="180"
              renderAs="svg"
            />
          </div>
          <p class="qr-info">Scan the QR code with the Spotistats app</p>
        </div>
        <Button @click="validateQr" class="scanned-button"
          >I've scanned the QR-code with the app</Button
        >
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
  margin: 0 auto;

  .qr-border {
    border-radius: 10px;
    padding: 10px 10px 3.5px 10px;
    background-color: #fff;
    width: 200px;
    height: 200px;
    margin: auto;
    margin-bottom: 8px;
  }

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

export default defineComponent({
  name: 'Signin',
  data() {
    return {
      data: '',
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
  },
  async created() {
    this.data = (await fetch(`https://beta-api.spotistats.app/api/v1/auth/qr?secret=${this.secret}`).then((res) => res.json())).data;
    this.qrdata = `spotistats://auth#${this.data}`;
  },
  methods: {
    async validateQr() {
      this.token = (
        await fetch('https://beta-api.spotistats.app/api/v1/auth/qr', {
          method: 'POST',
          body: JSON.stringify({ data: this.data, secret: this.secret }),
          headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json())
      ).data;
      localStorage.setItem('token', this.token);
      this.$router.push('/');
    },
  },
});
</script>
