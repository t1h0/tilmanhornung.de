<script setup lang="ts">
import Video from '@/components/Video.vue'
import { getAnimationDelay } from '@/ts/functions'
const videos = [
  {
    title: 'weit weg',
    alt: "a movie I made for my bachelor's thesis, shedding light on the element of surprise. written, directed, filmed and cut by me.",
    yt_id: 'Xd77R7J77IE'
  },
  {
    title: 'shelter from the storm',
    alt: "music video to my band's second single. directed, filmed and cut by me.",
    yt_id: '8dprNbvY20s'
  },
  {
    title: 'we could have been great',
    alt: "music video to my band's first single. written, directed, filmed and cut by me.",
    yt_id: 'hTglRhdopFg'
  },
  {
    title: 'die alten römer',
    alt: "episode for the kid's show 'triki-reporter'. produced and directed by me. written by the kids.",
    yt_id: 'fTIP-YIfN2I'
  },
  {
    title: 'karneval',
    alt: "episode for the kid's show 'triki-reporter'. produced and directed by me. written by the kids.",
    yt_id: '07IFqY1P5lA'
  }
]
</script>

<template>
  <main v-lr-layout="{ distances: [50, 50, 80, 75, 100] }">
    <Transition
      v-for="(video, i) in videos"
      :key="video.yt_id"
      :enter-active-class="`animate__animated animate__fadeIn animate__delay-${getAnimationDelay(i, 500)}ms`"
      appear
    >
      <Video data-aos="fade" class="vid" :="video" />
    </Transition>
  </main>
</template>

<style scoped lang="scss">
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
  max-height: calc(100vh - 2 * main.$app-padding);

  &:deep(h2) {
    @extend h4;
  }
}

@media (max-width: 1023px) {
  .vid {
    &:deep(h1) {
      font-size: 1.75rem !important;
      line-height: 1;
    }

    &:deep(h2) {
      font-size: 0.9rem !important;
      line-height: 1;
    }
  }
}
</style>
