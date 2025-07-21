<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const currentYear = ref(new Date().getFullYear());
const aboutActive = ref(false);
const publicationActive = ref(false);
const viewTitle = ref('');

const route = useRoute();
watch(() => route.path, () => {
  aboutActive.value = route.path === '/';
  publicationActive.value = route.path === '/publication';

  viewTitle.value = {
    '/': 'About Me',
    '/publication': 'Publications'
  }[route.path] || '';
}, { immediate: true });
</script>

<template>

  <section class="section">
    <div class="container is-max-desktop">
      <nav class="level">
        <div class="level-left"></div>

        <div class="level-right">
          <p class="level-item nav-item">
            <router-link to="/" :class="{'nav-active': aboutActive}">
              About
            </router-link>
          </p>
          <p class="level-item nav-item">
            <router-link to="/publication" :class="{'nav-active': publicationActive}">
              Publications
            </router-link>
          </p>
          <p class="level-item nav-item">
            <a href="/pdfs/wangzan_cv.pdf">
              CV
            </a>
          </p>
        </div>
      </nav>

      <h3 class="title is-3" style="padding-left: 0.3em;">{{ aboutActive ? 'About Me' : 'Publications' }}</h3>
      <hr>
    </div>
  </section>

  <router-view></router-view>

  <footer class="footer foot">
    <div class="container is-max-desktop">
      <hr>
      <div class="block has-text-centered">
        <p> © {{ currentYear }} - Zan Wang - Github Page </p> 
        <p>Powered by <a href="https://vuejs.org/index.html">Vue.js</a> and <a href="https://bulma.io/">Bulma</a></p>
      </div>
    </div>
  </footer>
</template>
