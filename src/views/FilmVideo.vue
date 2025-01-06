<script setup lang="ts">
import Video from '@/components/Video.vue'
import { getAnimationDelay } from '@/ts/functions'
</script>

<template>
  <main v-lr-layout="{ distances: [50, 50, 80, 75, 100] }">
    <Transition
      v-for="(video, i) in videos"
      :key="video.yt_id"
      :enter-active-class="`animate__animated animate__fadeIn animate__delay-${getAnimationDelay(i, 500)}ms`"
      appear
    >
      <Video class="vid" :="video" />
    </Transition>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/css/vars.scss';
@use '@/assets/css/main.scss';

main {
  display: flex;
  flex-flow: row wrap;
  max-width: 1024px;
}

.vid {
  width: 100%;
  height: 250px;
  // position: relative;
  max-height: calc(100vh - 2 * vars.$app-padding);

  &:deep(h1) {
    font-size: clamp(1.5rem, 0.9222rem + 2.4653vw, 2.5rem) !important;
    line-height: 1;
  }

  &:deep(h2) {
    @extend h4;
    font-size: clamp(0.8rem, 0.6844rem + 0.4931vw, 1rem) !important;
  }
}

@media (max-width: 1023px) {
  .vid {
    &:deep(h1) {
      line-height: 1;
    }

    &:deep(h2) {
      line-height: 1;
    }
  }
}
</style>
