<template>
  <div id="user">
    <!-- Top section with profile -->
    <div class="block">
      <div class="profile">
        <img
          src="https://i.scdn.co/image/ab6775700000ee85491b935efc2385031a2fa18e"
          class="profile-picture"
          alt
        />
        <div class="profile-info">
          <h2 class="profile-name">Sjoerd</h2>
          <p class="profile-bio">shi daggoetje geswiped</p>
        </div>
      </div>
    </div>
    <!-- Main page -->
    <main>
      <Container>
        <Card>
          <ImageCardContainer>
            <ImageCard
              image="https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2020/06/astrid-s-dance-dance-dance.jpg?fit=1200%2C1200&ssl=1"
              title="Astrid S"
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
        </Card>
      </Container>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.block {
  width: 100vw;
  min-height: 35vh;
  background-color: var(--body-lighter);
  border-radius: 0 0 40px 40px;
  padding: 80px 0;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .profile-picture {
    border-radius: 100%;
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
}

.profile-info {
  margin-top: var(--gap-large);
  text-align: center;

  .profile-name {
    font-size: 2rem;
  }

  .profile-bio {
    font-size: 1.5rem;
  }
}

main {
  margin-top: -100px;
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';

// Import components
import Container from '../components/layout/Container.vue';
import Card from '../components/layout/Card.vue';
import ImageCardContainer from '../components/layout/ImageCardContainer.vue';
import ImageCard from '../components/base/ImageCard.vue';

export default defineComponent({
  components: {
    Container,
    Card,
    ImageCardContainer,
    ImageCard,
  },
});
</script>
