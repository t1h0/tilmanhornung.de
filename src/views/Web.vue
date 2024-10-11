<script setup lang="ts">
import WebRef from '../components/WebRef.vue'
const webrefs = [
  { url: 'https://www.tilmanhornung.de', title: 'TILMANHORNUNG' },
  { url: 'https://www.hornung-bonn.de', title: 'PRAXISFÜRPSYCHOTHERAPIEANGELIKAHORNUNG' },
  { url: 'https://www.wphornung.de', title: 'PRAXISPROF.DR.MED.WILHELMPETERHORNUNG' }
]
</script>

<template>
  <main>
    <WebRef class="webref" v-for="webref in webrefs" :key="webref.url" :url="webref.url" :title="webref.title" />
  </main>
</template>

<style scoped>
main {
  line-height: 0.9;
  font-size: 48pt;
}

.webref {
  margin-bottom: 3rem;
}

@media (min-width: 1024px) {
  main {
    font-size: 72pt;
  }
}
</style>
