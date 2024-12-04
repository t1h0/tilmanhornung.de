<script setup lang="ts">
import Graphic from '@/components/Graphic.vue'
import { getAnimationDelay } from '@/ts/functions'
const graphics = [
  {
    title: 'Jazz Baby EP Cover',
    alt: 'Jazz Baby EP Cover',
    original: '/img/ep-cover-jazzbaby.jpg',
    preview: '/img/ep-cover-jazzbaby-preview.jpg'
  },
  {
    title: 'Mercury EP Cover',
    alt: 'Mercury EP Cover',
    original: '/img/ep-cover-mercury.jpg',
    preview: '/img/ep-cover-mercury-preview.jpg'
  }
]
</script>

<template>
  <main>
    <Transition
      v-for="(graphic, i) in graphics"
      :key="graphic.original"
      :enter-active-class="`animate__animated animate__fadeIn animate__delay-${getAnimationDelay(i)}ms`"
      appear
    >
      <Graphic class="img" :="graphic" />
    </Transition>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-flow: row;
  gap: 1rem;
}

.img {
  flex: calc(50% - 1rem);
  max-height: 100%;
  transition: flex 0.5s;

  &:hover {
    flex: calc(75% - 1rem);
  }
}
</style>
