<template>
  <Container>
    <div class="image-container">
      <div class="image-card card1">
        <ImageCard
          image="https://i.scdn.co/image/ab67616d00001e02664034dd80e91b28f773598d"
          link="/track/lilnasx"
          sticky-title="MONTERO"
          sticky-desc="4,566,861 streams"
          sticky-corner="#1"
        />
      </div>
      <div class="image-card card2">
        <ImageCard
          image="https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431"
          link="/track/justinbieber"
          sticky-title="Peaches"
          sticky-desc="4,566,861 streams"
          sticky-corner="#2"
        />
      </div>
      <div class="image-card card3">
        <ImageCard
          image="https://i.scdn.co/image/ab67616d00001e02175715816616d0fb317fabeb"
          link="/track/polog"
          sticky-title="RAPSTAR"
          sticky-desc="4,566,861 streams"
          sticky-corner="#3"
        />
      </div>
    </div>
    <main>
      <div class="item">
        <h1 class="rank">#1</h1>
        <Card>
          <div class="card">
            <div class="image">
              <ImageCard
                image="https://i.scdn.co/image/ab67616d00001e02175715816616d0fb317fabeb"
              ></ImageCard>
            </div>
            <div class="info">
              <h1>RAPSTER</h1>
              <p>4,566,861 streams</p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  </Container>
</template>

<style lang="scss" scoped>
.image-container {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  -webkit-align-content: space-between;
  align-content: space-between;
  height: 410px;

  .image-card {
    width: 300px;
    height: 300px;
  }

  .card1 {
    z-index: 3;
  }

  .card2 {
    z-index: 2;
    margin-top: 40px;
    margin-left: -50px;
  }

  .card3 {
    z-index: 1;
    margin-top: 80px;
    margin-left: -50px;
  }
}

.item {
  display: flex;
  align-items: center;

  .rank {
    margin-right: 20px;
  }

  .card {
    display: flex;
    align-items: center;
    width: 100%;

    .image {
      width: 80px;
      margin-right: 20px;
    }

    .info {
      > p {
        font-size: 1rem;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '../components/layout/Container.vue';
import ImageCard from '../components/base/ImageCard.vue';
import Card from '../components/layout/Card.vue';

export default defineComponent({
  name: 'Global',
  components: {
    Container,
    ImageCard,
    Card,
  },
});
</script>
