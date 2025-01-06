<script setup lang="ts">
import WebRef from '@/components/WebRef.vue'
import { webrefs } from '@/content/web'
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

@media (min-width: 1024px) {
  main {
    font-size: 56pt;
  }
}
</style>
