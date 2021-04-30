<template>
  <div class="home">
    <Container>
      Hello world
      <div class="tmp">
        <ImageCard
          image="https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2020/06/astrid-s-dance-dance-dance.jpg?fit=1200%2C1200&ssl=1"
          title="Astrid S"
        />
        <ImageCard
          image="https://i0.wp.com/abitofpopmusic.com/wp-content/uploads/2020/06/astrid-s-dance-dance-dance.jpg?fit=1200%2C1200&ssl=1"
          title="Dance Dance Dance"
        />
        <ImageCard
          image="https://upload.wikimedia.org/wikipedia/en/2/26/Dark_Was_the_Night_%28Front_Cover%29.png"
          title="So Far Around The Bend"
        />
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.home {
  margin: 80px 0;
}
.tmp {
  // This is a temporary element + layout.
  // I repeat: TEMPORARY!
  background: var(--body-lighter);
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: var(--gap-large);
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';

// Import components
import Container from '../components/layout/Container.vue';
import ImageCard from '../components/base/ImageCard.vue';

export default defineComponent({
  components: {
    Container,
    ImageCard,
  },
});
</script>
