<script setup lang="ts">
defineProps({ title: String, subtitle: String, start: String, end: String, place: String })
</script>

<template>
    <div id="wrapper">
        <div class="row">
            <div id="title">
                <h1>
                    <a class="arrowLink" target="_blank" v-if="titleUrl" :href="props.titleUrl">
                        {{ title }}
                    </a>
                    <span v-else>
                        {{ title }}
                    </span>
                </h1>
            </div>
            <div id="date">
                {{ start }}<span v-if="end">&nbsp;-&nbsp;{{ end }}</span>
            </div>
        </div>
        <div class="row">
            <div id="subtitle">
                <h2>
                    <a class="arrowLink" target="_blank" v-if="subtitleUrl" :href="subtitleUrl">
                        {{ subtitle }}
                    </a>
                    <span v-else>
                        {{ subtitle }}
                    </span>
                </h2>
            </div>
            <div id="place" v-if="place">
                {{ place }}
            </div>
        </div>
    </div>
</template>

<style scoped>
#wrapper {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#date {
    flex-shrink: 0;
}

#place {
    font-style: italic;
}
</style>
