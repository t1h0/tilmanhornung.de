<script setup lang="ts">
import CVEntry from './CVEntry.vue'
defineProps<{
    title: string
    entries: Array<{ title: string; subtitle: string; start: string; end?: string; place: string }>
}>()
</script>

<template>
    <h1 id="title">{{ title }}.</h1>
    <CVEntry v-for="entry in $props.entries" :key="entry.title" class="cventry" :title="entry.title"
        :subtitle="entry.subtitle" :place="entry.place" :start="entry.start" :end="entry.end" />
</template>

<style>
#title {
    font-size: var(--h2);
}

.cventry:not(:last-child) {
    margin-bottom: 1rem;
}

.cventry h1 {
    font-size: var(--h3);
}

.cventry h2 {
    font-size: var(--h4);
}
</style>
