<script setup lang="ts">
defineProps<{ url: string; title: string }>()
</script>

<template>
  <a id="container" class="arrowLink" :href="url" target="_blank">
    <span class="char" v-for="char in title" :key="char">{{ char }}</span></a
  >
</template>

<style scoped>
#container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
}

.char {
  flex-basis: 9vw;
}
</style>
