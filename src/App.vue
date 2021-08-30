<template>
  <!-- <Header /> -->
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view> -->
  <div class="sidebar">
    <button>Overview</button>
  </div>
  <main>
    <h1 class="title">Overview</h1>
    <div v-for="i in 6" :key="i" class="card">
      <h2>{{ i }},000</h2>
      <b>minutes streamed</b>
    </div>
    <br /><br />
    <h2 class="subtitle">Recently played</h2>
  </main>
  <Footer />
</template>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}

h1 {
  zoom: 1.1;
}

.sidebar {
  width: 15rem;
  background-color: #18181c;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  button {
    font-family: 'Gordita', Arial, Helvetica, sans-serif;
    border-radius: 8px;
    position: relative;
    width: 80%;
    left: 10%;
    top: 5%;
    padding: 8px 0px 8px 10px;
    border: none;
    background: #111112;
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
  }

  button:active {
    background: #11111250;
  }
}

.card {
  padding: 0.8rem 0.9rem 0.6rem 0.9rem;
  border-radius: 15px;
  background-color: #18181c;
  display: inline-block;
  margin-right: 0.7em;
  h2 {
    color: var(--primary);
  }
}

main {
  position: relative;
  left: 15rem;
  top: 0;
  padding: 3.5rem 2rem;
}

.title {
  font-weight: 700;
  color: #fff;
}

@font-face {
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 100;
  src: url('assets/font/Gordita Thin.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: italic;
  font-weight: 100;
  src: url('assets/font/Gordita Thin Italic.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 300;
  src: url('assets/font/Gordita Light.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: italic;
  font-weight: 300;
  src: url('assets/font/Gordita Light Italic.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 400;
  src: url('assets/font/Gordita Regular.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: italic;
  font-weight: 400;
  src: url('assets/font/Gordita Regular Italic.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 500;
  src: url('assets/font/Gordita Medium.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: italic;
  font-weight: 500;
  src: url('assets/font/Gordita Medium Italic.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 700;
  src: url('assets/font/Gordita Bold.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: italic;
  font-weight: 700;
  src: url('assets/font/Gordita Bold Italic.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 900;
  src: url('assets/font/Gordita Black.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: italic;
  font-weight: 900;
  src: url('assets/font/Gordita Black Italic.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 950;
  src: url('assets/font/Gordita Ultra.woff') format('woff');
}

@font-face {
  font-family: 'Gordita';
  font-style: italic;
  font-weight: 950;
  src: url('assets/font/Gordita Ultra Italic.woff') format('woff');
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from 'vue';

// Import components
// import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

export default defineComponent({
  components: {
    // Header,
    Footer,
  },
});
</script>
