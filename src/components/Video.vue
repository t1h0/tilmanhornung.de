<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ yt_id: string; title?: string; alt?: string }>()
const yt_url = computed(() => 'https://www.youtube-nocookie.com/embed/' + props.yt_id)
</script>

<template>
  <div id="video-wrapper">
    <iframe
      id="video"
      :src="yt_url"
      :title="title"
      :alt="alt"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      v-prlx="{ speed: 0.1, reverse: true }"
    ></iframe>
    <div id="text" v-prlx="{ speed: 0.1 }">
      <h1>{{ title }}</h1>
      <h2>{{ alt }}</h2>
    </div>
  </div>
</template>

<style scoped>
#video-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

#video {
  width: 100%;
  max-width: 500px;
  height: 100%;
  /* flex-basis: 90%; */
}

#text {
  flex-basis: 40%;
}
</style>
