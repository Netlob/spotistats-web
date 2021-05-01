<template>
  <div>
    <div
      class="block"
      :style="{
        backgroundImage: 'url(https://i.scdn.co/image/5a141b90473118fe09f078af76a9e0404da58335)',
      }"
    >
      <h1 class="artist-name">Astrid S</h1>
    </div>
    <main>
      <Container>
        <Card>
          <div>
            <h2 class="card-title"><strong>Top tracks</strong></h2>
            <ImageCardContainer>
              <ImageCard
                image="https://images-na.ssl-images-amazon.com/images/I/71bASkE2SSL._SL1200_.jpg"
                title="Cherokee"
                sticky-corner="#5"
                link="/artist/geenideewieditis"
              />
              <ImageCard
                image="https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2020/06/astrid-s-dance-dance-dance.jpg?fit=1200%2C1200&ssl=1"
                title="Dance Dance Dance"
              />
              <ImageCard
                image="https://upload.wikimedia.org/wikipedia/en/2/26/Dark_Was_the_Night_%28Front_Cover%29.png"
                title="So Far Around The Bend"
              />
              <ImageCard
                image="https://images-na.ssl-images-amazon.com/images/I/71bASkE2SSL._SL1200_.jpg"
                title="Cherokee"
                sticky-corner="#5"
                link="/artist/geenideewieditis"
              />
              <ImageCard
                image="https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2020/06/astrid-s-dance-dance-dance.jpg?fit=1200%2C1200&ssl=1"
                title="Dance Dance Dance"
              />
              <ImageCard
                image="https://upload.wikimedia.org/wikipedia/en/2/26/Dark_Was_the_Night_%28Front_Cover%29.png"
                title="So Far Around The Bend"
              />
              <ImageCard
                image="https://upload.wikimedia.org/wikipedia/en/2/26/Dark_Was_the_Night_%28Front_Cover%29.png"
                title="So Far Around The Bend"
              />
            </ImageCardContainer>
          </div>
        </Card>
      </Container>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.block {
  width: 100vw;
  min-height: 500px;
  background-color: var(--body-lighter);
  border-radius: 0 0 40px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;

  .artist-name {
    font-size: 6rem;
    text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 600px) {
    .artist-name {
      font-size: 4rem;
    }
  }
}

@media only screen and (max-width: 1300px) {
  .block {
    background-size: cover;
    background-position-x: center;
  }
}

main {
  margin-top: 30px;
}

.card-title {
  font-weight: inherit;
  font-size: 1.5rem;
}

.image-card-container {
  margin-top: var(--gap);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '../components/layout/Container.vue';
import ImageCard from '../components/base/ImageCard.vue';
import ImageCardContainer from '../components/layout/ImageCardContainer.vue';
import Card from '../components/layout/Card.vue';

export default defineComponent({
  name: 'Artist',
  components: {
    Container,
    ImageCard,
    ImageCardContainer,
    Card,
  },
});
</script>
