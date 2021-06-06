<template>
  <div>
    <!-- Top section with profile -->
    <div class="block">
      <Container v-if="stats.userInfo">
        <Profile :image="stats.userInfo.images" :displayName="stats.userInfo.display_name" />
      </Container>
    </div>
    <!-- Main page -->
    <main>
      <Container>
        <ColumnLayout v-if="stats.topArtists">
          <Column class="left">
            <div class="mb-gap-large mt-gap-large">
              <h1>{{ $t('topArtists') }}</h1>
            </div>
            <div
              v-for="(artist, index) in stats.topArtists.items.slice(0, 10)"
              :key="artist.id"
              class="artist"
            >
              <router-link :to="{ name: 'Artist', params: { id: artist.id } }" class="link">
                #{{ index + 1 }} <span class="artist-name">{{ artist.name }}</span>
              </router-link>
            </div>
          </Column>
          <Column class="top-column">
            <div class="top">
              <ImageCard
                :image="stats.topArtists.items[1].images[0].url"
                stickyCorner="#2"
                class="item-1"
              ></ImageCard>
              <ImageCard
                :image="stats.topArtists.items[2].images[0].url"
                stickyCorner="#3"
                class="item-3"
              ></ImageCard>
              <ImageCard
                :image="stats.topArtists.items[0].images[0].url"
                class="item-2"
                stickyCorner="#1"
              ></ImageCard>
            </div>
          </Column>
        </ColumnLayout>
        <ColumnLayout v-if="stats.topTracks">
          <Column class="right">
            <div class="mb-gap-large mt-gap-large">
              <h1>{{ $t('topTracks') }}</h1>
            </div>
            <div
              v-for="(track, index) in stats.topTracks.items.slice(0, 10)"
              :key="track.id"
              class="artist"
            >
              <router-link :to="{ name: 'Track', params: { id: track.id } }" class="link">
                #{{ index + 1 }} <span class="artist-name">{{ track.name }}</span>
              </router-link>
            </div>
          </Column>
          <Column class="top-column">
            <div class="top">
              <ImageCard
                :image="stats.topTracks.items[1].album.images[0].url"
                stickyCorner="#2"
                class="item-1"
              ></ImageCard>
              <ImageCard
                :image="stats.topTracks.items[2].album.images[0].url"
                stickyCorner="#3"
                class="item-3"
              ></ImageCard>
              <ImageCard
                stickyCorner="#1"
                :image="stats.topTracks.items[0].album.images[0].url"
                class="item-2"
              ></ImageCard>
            </div>
          </Column>
        </ColumnLayout>
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

.card {
  -webkit-box-shadow: 0px 10px 50px -10px var(--box-shadow);
  -moz-box-shadow: 0px 10px 50px -10px var(--box-shadow);
  box-shadow: 0px 10px 50px -10px var(--box-shadow);
}

main {
  margin-top: var(--gap-large);
}

.top-column {
  display: grid;
  place-items: center;
}

.artist {
  margin-bottom: var(--gap-small);
  font-size: 1.2rem;
}

.link {
  color: var(--text);
  text-decoration: none;
}

.top {
  display: grid;
  grid-template-areas: 'left middle right';

  .item-2 {
    transform: scale(1.2);
    transition: transform 0.3s;
    z-index: 1;
    grid-area: middle;

    width: 200px;
    height: 200px;

    &:hover {
      transform: scale(1.24);
    }
  }

  .item-1 {
    margin-right: -50px;
    transition: transform 0.3s;
    grid-area: left;

    width: 200px;
    height: 200px;

    &:hover {
      transform: translateX(-20px) rotateZ(-2deg);
    }

    &:hover ~ .item-2 {
      transform: scale(1.2) translateX(20px) rotateZ(2deg);
    }
  }

  .item-3 {
    margin-left: -50px;
    transition: transform 0.3s;
    grid-area: right;

    width: 200px;
    height: 200px;

    &:hover {
      transform: scale(1.04) translateX(20px) rotateZ(2deg);
    }

    &:hover + .item-2 {
      transform: scale(1.2) translateX(-20px) rotateZ(-2deg);
    }
  }

  .image-card {
    grid-row: 1;
    width: 200px;
    height: 200px;
    border-radius: 25px;

    background-position: center;
    background-size: cover;
    background-color: var(--body-lighter);

    -webkit-box-shadow: 0px 10px 50px -10px var(--box-shadow);
    -moz-box-shadow: 0px 10px 50px -10px var(--box-shadow);
    box-shadow: 0px 10px 50px -10px var(--box-shadow);
  }
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';
import config from '@/config/config';

// Import components
import ColumnLayout from '@/components/layout/ColumnLayout.vue';
import Column from '@/components/layout/Column.vue';
import ImageCard from '@/components/base/ImageCard.vue';
import Profile from '../components/base/Profile.vue';
import Container from '../components/layout/Container.vue';

export default defineComponent({
  components: {
    Profile,
    Container,
    Column,
    ColumnLayout,
    ImageCard,
  },
  data() {
    return {
      stats: null as unknown,
    };
  },
  created() {
    this.getUserStats();
  },
  methods: {
    async getUserStats() {
      const token: string = localStorage.getItem('token') || '';
      if (token) {
        const response = await fetch(
          `${config.server.url}/friends/stats/${this.$route.params.userid}`,
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
      }
    },
  },
});
</script>
