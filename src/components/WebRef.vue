<script setup lang="ts">
defineProps<{ url: string; title: string }>()
</script>

<template>
    <a id="container" :href="url" target="_blank"><span class="arrow">&#x276F;</span>
        <span class="char" v-for="char in title" :key="char">{{ char }}</span></a>
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

.arrow {
    color: var(--color-main);
}
</style>
