<template>
  <footer>
    <Container>
      <ColumnLayout>
        <Column>
          <router-link to="/privacy">What's New</router-link>
          <router-link to="/privacy">Privacy Policy</router-link>
          <router-link to="/privacy">Terms & Conditions</router-link>
          <router-link to="/privacy">Status</router-link>
          <Row class="mt-gap">
            <SocialButton
              icon="face"
              @click="redirectToSocial(`${config.server.url}/redirect/discord`)"
            />
            <SocialButton icon="mail" @click="redirectToSocial(`mailto:sjoerd@netlob.dev`)" />
            <SocialButton
              icon="face"
              @click="redirectToSocial(`${config.server.url}/redirect/twitter`)"
            />
          </Row>
        </Column>
        <Column>
          <div class="badges">
            <a
              href="https://play.google.com/store/apps/details?id=dev.netlob.spotistats"
              target="_blank"
            >
              <img
                src="@/assets/google_play_store_badge.svg"
                alt="get Spotists on the Play Store"
                class="badge"
              />
            </a>
            <a
              href="https://apps.apple.com/app/spotistats-for-spotify/id1526912392"
              target="_blank"
            >
              <img
                src="@/assets/apple_app_store_badge.svg"
                alt="get Spotists on the App Store"
                class="badge"
              />
            </a>
          </div>
        </Column>
      </ColumnLayout>
    </Container>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--body-lighter);
  padding: var(--gap-large);
  margin-top: var(--gap-large);

  a {
    color: var(--primary);
    text-decoration: none;
  }

  .badges {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    justify-content: center;
    align-items: flex-end;

    .badge {
      width: 200px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import config from '@/config/config';
import dayjs from '@/utils/day';
import Container from '@/components/layout/Container.vue';
import ColumnLayout from '@/components/layout/ColumnLayout.vue';
import Column from '@/components/layout/Column.vue';
import Row from '@/components/layout/Row.vue';
import SocialButton from '@/components/base/buttons/SocialButton.vue';

export default defineComponent({
  name: 'Footer',
  components: {
    Container,
    ColumnLayout,
    Column,
    Row,
    SocialButton,
  },
  data() {
    return {
      config,
    };
  },
  methods: {
    redirectToSocial(url: string) {
      window.open(url);
    },
    getYear() {
      return dayjs().format('YYYY');
    },
  },
});
</script>
