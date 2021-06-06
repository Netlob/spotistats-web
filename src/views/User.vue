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
          <Column>
            <!-- other tracks -->
          </Column>
          <Column class="top-artists-column">
            <div class="top-artists">
              <div
                class="image-card item-1"
                :style="{ backgroundImage: `url(${stats.topArtists.items[1].images[0].url})` }"
              ></div>
              <div
                class="image-card item-3"
                :style="{ backgroundImage: `url(${stats.topArtists.items[2].images[0].url})` }"
              ></div>
              <div
                class="image-card item-2"
                :style="{ backgroundImage: `url(${stats.topArtists.items[0].images[0].url})` }"
              ></div>
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

.top-artists-column {
  display: grid;
  place-items: center;
}

.top-artists {
  display: grid;
  grid-template-areas: 'left middle right';

  .item-2 {
    transform: scale(1.2);
    transition: transform 0.3s;
    z-index: 1;
    grid-area: middle;

    &:hover {
      transform: scale(1.24);
    }
  }

  .item-1 {
    margin-right: -50px;
    transition: transform 0.3s;
    grid-area: left;

    &:hover {
      transform: scale(1.04) translateX(-20px) rotateZ(-2deg);
    }

    &:hover ~ .item-2 {
      transform: scale(1.2) translateX(20px) rotateZ(2deg);
    }
  }

  .item-3 {
    margin-left: -50px;
    transition: transform 0.3s;
    grid-area: right;

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
import Profile from '../components/base/Profile.vue';
import Container from '../components/layout/Container.vue';

export default defineComponent({
  components: {
    Profile,
    Container,
    Column,
    ColumnLayout,
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
