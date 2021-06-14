<template>
  <footer>
    <Container>
      <ColumnLayout>
        <Column>
          <Logo class="logo" />
          <div class="routes">
            <router-link to="/privacy">What's New</router-link>
            <router-link to="/privacy">Privacy Policy</router-link>
            <router-link to="/privacy">Terms & Conditions</router-link>
            <router-link to="/privacy">Status</router-link>
          </div>
        </Column>
        <Column class="right-align">
          <div class="badges">
            <a href="" target="_blank">
              <img
                src="@/assets/google_play_store_badge.svg"
                alt="get Spotists on the Play Store"
                class="badge"
              />
            </a>
            <a href="" target="_blank">
              <img
                src="@/assets/apple_app_store_badge.svg"
                alt="get Spotists on the App Store"
                class="badge"
              />
            </a>
          </div>
          <Row class="socials">
            <SocialButton
              icon="fas fa-envelope"
              @click="redirectToSocial(`mailto:web@spotistats.app`)"
            />
            <SocialButton
              icon="fab fa-github"
              @click="redirectToSocial(`${config.server.url}/redirect/discord`)"
            />
            <SocialButton
              icon="fab fa-twitter"
              @click="redirectToSocial(`${config.server.url}/redirect/twitter`)"
            />
            <SocialButton
              icon="fab fa-instagram"
              @click="
                redirectToSocial(`${config.server.url}/redirect/instagram
              `)
              "
            />
          </Row>
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

  .right-align {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .logo {
    width: 32px;
    height: 32px;
    margin-bottom: var(--gap-large);
  }

  .routes {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }

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

  .socials {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--gap-large);
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import config from '@/config/config';
import Container from '@/components/layout/Container.vue';
import ColumnLayout from '@/components/layout/ColumnLayout.vue';
import Column from '@/components/layout/Column.vue';
import Row from '@/components/layout/Row.vue';
import SocialButton from '@/components/base/buttons/SocialButton.vue';
import Logo from '@/components/base/Logo.vue';

export default defineComponent({
  name: 'Footer',
  components: {
    Container,
    ColumnLayout,
    Column,
    Row,
    SocialButton,
    Logo,
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
  },
});
</script>
