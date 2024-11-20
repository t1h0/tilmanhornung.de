<script setup lang="ts">
import Graphic from '../components/Graphic.vue'
const graphics = [
  {
    title: 'Jazz Baby EP Cover',
    alt: 'Jazz Baby EP Cover',
    original: '/img/ep-cover-jazzbaby.jpg',
    preview: '/img/ep-cover-jazzbaby-preview.jpg'
  },
  {
    title: 'Mercury EP Cover',
    alt: 'Mercury EP Cover',
    original: '/img/ep-cover-mercury.jpg',
    preview: '/img/ep-cover-mercury-preview.jpg'
  }
]
</script>

<template>
  <main>
    <Graphic class="img" v-for="graphic in graphics" :key="graphic.original" :="graphic" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-flow: row;
  gap: 1rem;
}

.img {
  flex: calc(50% - 1rem);
  height: 100vh;
  max-height: calc(100vh - 2.5 * var(--app-padding));
}

.img:hover {
  flex: calc(75% - 1rem);
}

/* .img #image {
  height: 100%;
} */
</style>
