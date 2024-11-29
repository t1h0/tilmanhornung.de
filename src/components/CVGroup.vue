<script setup lang="ts">
import CVEntry from './CVEntry.vue'
import type { CVEntryProps } from '@/ts/types'
defineProps<{
    title: string
    entries: CVEntryProps[]
}>()
</script>

<template>
    <div>
        <h1>{{ title }}.</h1>
        <CVEntry v-for="entry in entries" :key="entry.title" class="cventry" :="entry" />
    </div>
</template>

<style scoped>
h1 {
    margin-bottom: .5rem;
}

.cventry:not(:last-child) {
    margin-bottom: 1rem;
}
</style>
