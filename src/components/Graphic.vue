<script setup lang="ts">
defineProps<{ original: string; preview: string; title?: string; alt?: string }>()
</script>

<template>
    <a :href="original" target="_blank" id="image" :style="{ backgroundImage: 'url(' + preview + ')' }">
    </a>
</template>

<style scoped>
#image {
    background-size: cover;
    background-position: 50%;
}
</style>
