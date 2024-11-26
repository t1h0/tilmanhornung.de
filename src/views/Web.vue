<script setup lang="ts">
import WebRef from '@/components/WebRef.vue'
import { inject } from 'vue'
const firstName = inject('firstName') == 'tilman' ? 'nomo' : 'tilman'
const webrefs = [
  { url: `https://www.${firstName}hornung.de`, title: `${firstName.toUpperCase()}HORNUNG` },
  { url: 'https://www.hornung-bonn.de', title: 'PRAXISFÜRPSYCHOTHERAPIEANGELIKAHORNUNG' },
  { url: 'https://www.wphornung.de', title: 'PRAXISPROFDRMEDWILHELMPETERHORNUNG' }
]
</script>

<template>
  <main>
    <WebRef class="webref" v-for="webref in webrefs" :key="webref.url" :="webref" />
  </main>
</template>

<style scoped>
main {
  line-height: 0.9;
  font-size: 48pt;
}

/* .webref {
  margin-bottom: 3rem;
} */

@media (min-width: 1024px) {
  main {
    font-size: 56pt;
  }
}
</style>
