<template>
  <div id="user">
    <!-- Top section with profile -->
    <div class="block">
      <Container v-if="stats.userInfo">
        <Profile :image="stats.userInfo.images" :displayName="stats.userInfo.display_name" />
      </Container>
    </div>
    <!-- Main page -->
    <main>
      <Container>
        <Card v-if="stats.topArtists && stats.topTracks">
          <div class="two-cols">
            <div>
              <h2 class="card-title">
                <strong>{{ $t('topTracks') }}</strong> <span>{{ $t('pastFourWeeks') }}</span>
              </h2>
              <ImageCardContainer>
                <div v-for="(track, index) in stats.topTracks.items" :key="track.id">
                  <ImageCard
                    :image="track.album.images[0].url"
                    :title="track.name"
                    :sticky-corner="`#${index + 1}`"
                    :link="`/track/${track.id}`"
                  />
                </div>
              </ImageCardContainer>
            </div>
            <div>
              <h2 class="card-title">
                <strong>{{ $t('topArtists') }}</strong> <span>{{ $t('pastFourWeeks') }}</span>
              </h2>
              <ImageCardContainer>
                <div v-for="(artist, index) in stats.topArtists.items" :key="artist.id">
                  <ImageCard
                    :image="artist.images[0].url"
                    :title="artist.name"
                    :sticky-corner="`#${index + 1}`"
                    :link="`/artist/${artist.id}`"
                  />
                </div>
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

.card {
  -webkit-box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.5);
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
  data() {
    return {
      stats: {
        type: Object,
        default: {},
      },
    };
  },
  mounted() {
    this.getUserStats();
  },
  methods: {
    async getUserStats() {
      const token: string = localStorage.getItem('token') || '';

      if (token) {
        const response = await fetch(
          `${process.env.VUE_APP_SERVER_URL}/friends/stats/${this.$route.params.userid}`,
          {
            mode: 'cors',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              Authorization: token,
            },
          }
        ).then((res) => res.json());
        this.stats = response.data;
        return;
      }

      this.$router.push('/signin');
    },
  },
});
</script>
