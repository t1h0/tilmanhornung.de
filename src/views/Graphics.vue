<script setup lang="ts">
import Graphic from '@/components/Graphic.vue'
import { getAnimationDelay } from '@/ts/functions'
import { graphics } from '@/content/graphics'
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
