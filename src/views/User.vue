<template>
  <div id="user">
    <!-- Top section with profile -->
    <div class="block">
      <Profile />
    </div>
    <!-- Main page -->
    <main>
      <Container>
        <Card>
          <div class="two-cols">
            <div>
              <h2 class="card-title">
                <strong>Top tracks</strong> <span>past 4 weeks</span>
              </h2>
              <ImageCardContainer>
                <ImageCard
                  image="https://images-na.ssl-images-amazon.com/images/I/71bASkE2SSL._SL1200_.jpg"
                  title="Cherokee"
                  sticky-title="#5"
                />
                <ImageCard
                  image="https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2020/06/astrid-s-dance-dance-dance.jpg?fit=1200%2C1200&ssl=1"
                  title="Dance Dance Dance"
                />
                <ImageCard
                  image="https://upload.wikimedia.org/wikipedia/en/2/26/Dark_Was_the_Night_%28Front_Cover%29.png"
                  title="So Far Around The Bend"
                />
              </ImageCardContainer>
            </div>
            <div>
              <h2 class="card-title">
                <strong>Top artists</strong> <span>past 4 weeks</span>
              </h2>
              <ImageCardContainer>
                <ImageCard
                  image="https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2020/06/astrid-s-dance-dance-dance.jpg?fit=1200%2C1200&ssl=1"
                  title="Astrid S"
                />
                <ImageCard
                  image="https://media.pitchfork.com/photos/5929be44c0084474cd0c2e6c/1:1/w_320/1cdb9cc5.jpg"
                  title="Cat Power"
                />
                <ImageCard
                  image="https://images.nrc.nl/kupIFtTa2yja3nak3ZDgtUcSK40=/1280x/filters:no_upscale()/s3/static.nrc.nl/bvhw/files/2019/08/data47919154-c4cc8a-e1565791272846.jpg"
                  title="The National"
                />
              </ImageCardContainer>
            </div>
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
  padding-top: 80px;
  padding-bottom: 150px;
}

main {
  margin-top: -100px;
}

.two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--gap-larger);
}

@media (max-width: 1000px) {
  .two-cols {
    grid-template-columns: 100%;
  }
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
// Import Vue
import { defineComponent } from 'vue';

// Import components
import Profile from '../components/base/Profile.vue';
import Container from '../components/layout/Container.vue';
import Card from '../components/layout/Card.vue';
import ImageCardContainer from '../components/layout/ImageCardContainer.vue';
import ImageCard from '../components/base/ImageCard.vue';

export default defineComponent({
  components: {
    Profile,
    Container,
    Card,
    ImageCardContainer,
    ImageCard,
  },
});
</script>
