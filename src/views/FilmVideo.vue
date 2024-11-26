<script setup lang="ts">
import Video from '@/components/Video.vue'
const videos = [
  { title: 'Weit Weg', alt: "Movie for my bachelor's thesis.", yt_id: 'Xd77R7J77IE' },
  {
    title: 'Shelter from the storm',
    alt: "Music video of my band Gentree's song 'Shelter from the storm'",
    yt_id: '8dprNbvY20s'
  },
  {
    title: 'We could have been great',
    alt: "Music video of my band Gentree's song 'We could have been great'",
    yt_id: 'hTglRhdopFg'
  },
  {
    title: 'TRIKI-Reporter: Die alten Römer ',
    alt: 'Episode for the local TV from my time working in production and artistic direction.',
    yt_id: 'fTIP-YIfN2I'
  },
  {
    title: 'triki-reporter Magazin - Karneval',
    alt: 'Episode for the local TV from my time working in production and artistic direction.',
    yt_id: '07IFqY1P5lA'
  }
]
</script>

<template>
  <main>
    <Video class="vid" v-for="video in videos" :key="video.yt_id" :="video" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

.vid {
  width: 100%;
  height: 250px;
  max-height: calc(100vh - 2 * var(--app-padding));
}

@media (min-width: 1024px) {
  .vid {
    flex: 0 0 calc(50% - 1rem);
  }
}

/* .vid:hover {
  flex: calc(50% - 1rem);
} */

/* .img #image {
  height: 100%;
} */
</style>
