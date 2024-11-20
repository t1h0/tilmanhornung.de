<script setup lang="ts">
defineProps<{
    title: string
    links?: Array<{ title: string; url: string; description?: string }>
}>()
</script>

<template>
    <div id="wrapper">
        <div id="title">
            <h1>{{ title }}</h1>
        </div>
        <div id="links">
            <div class="link" v-for="link in links" :key="link.url">
                <h2 class="arrowLink">
                    <a :href="link.url" target="_blank">
                        {{ link.title }}
                    </a>
                </h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 767px) {
    #wrapper {
        gap: 0.5rem;
    }


    .link:not(:last-child) {
        margin-right: 1em;
    }
}

#wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}

#title {
    line-height: 0.75;
    flex-grow: 0;
}

#links {
    display: flex;
    line-height: 1;
    flex-shrink: 0;
}

#place {
    font-style: italic;
}

@media (min-width: 768px) {
    #wrapper {
        flex-direction: row;
        align-items: flex-end;
    }

    #links {
        text-align: right;
        flex-direction: column;
    }
}
</style>
