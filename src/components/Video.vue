<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ yt_id: string; title?: string; alt?: string }>()
const yt_url = computed(() => 'https://www.youtube-nocookie.com/embed/' + props.yt_id)
</script>

<template>
    <div>
        <iframe id="video" :src="yt_url" :title="title" :alt="alt" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</template>

<style scoped>
#video {
    width: 100%;
    height: 100%;
}
</style>
