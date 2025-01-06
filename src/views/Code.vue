<script setup lang="ts">
import ProjectEntry from '@/components/ProjectEntry.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { entries } from '@/content/code'
gsap.registerPlugin(ScrollTrigger)

let animationContext: gsap.Context

onMounted(() => {
  animationContext = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#app',
        pin: '#project-entries-wrapper',
        pinSpacing: false,
        start: 0,
        end: 'clamp(bottom bottom)',
        scrub: true,
        // markers: true
        snap: {
          snapTo: 'labelsDirectional',
          duration: { min: 0.2, max: 1 },
          // directional: true,
          delay: 0,
          ease: 'power1.out'
        }
      }
    })
    tl.addLabel('start')
    const projectEntries = document.getElementsByClassName('project-entry')
    Array.from(projectEntries).forEach((el, index) => {
      const labelName = `entry-${index}`
      if (index != 0) {
        tl.to(el, { autoAlpha: 1, duration: 2 }, '<')
        Array.from(el.getElementsByClassName('animate-entity')).forEach((subEl) => {
          tl.to(subEl, { autoAlpha: 1, duration: 2 }, '+=0.5')
        })
        tl.addLabel(labelName, '>')
      }
      if (index != projectEntries.length - 1) {
        tl.to(el, { autoAlpha: 0, duration: 2 }, '+=1')
      }
    })
  })
})

onUnmounted(() => {
  animationContext.revert()
})
</script>

<template>
  <main>
    <div id="grid-wrapper" class="grid">
      <div id="instruction" class="full-grid">
        [scroll down to see more]<br />[click on the project names to see the project]
      </div>
      <Transition
        enter-active-class="animate__animated animate__fadeIn animate__delay-0300ms"
        appear
      >
      </Transition>
      <Transition enter-active-class="animate__animated animate__fadeIn" appear>
        <div id="project-entries-wrapper" class="grid full-grid">
          <ProjectEntry
            v-for="(entry, index) in entries"
            :key="`entry-${index}`"
            :="entry"
            class="project-entry full-grid"
          />
        </div>
      </Transition>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/css/vars.scss';

main {
  margin-bottom: 500vh;
}

#project-entries-wrapper {
  height: vars.$content-min-height-mobile;
}

#instruction {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: vars.$color-main;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  font-size: clamp(0.8rem, 0.3955rem + 1.7257vw, 1.5rem);
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  align-content: center;
}

.full-grid {
  grid-area: 1 / 1 / span 1 / span 1;
}

.project-entry {
  &:deep(h1) {
    font-size: clamp(3rem, 1.2666rem + 7.396vw, 6rem);
    line-height: 0.75;
  }
  &:deep(h2) {
    font-size: clamp(1rem, 0.7111rem + 1.2327vw, 1.5rem);
    line-height: 1;
  }
  &:deep(#links) {
    font-weight: normal;
    line-height: 1rem;
  }
  &:not(:first-child) {
    opacity: 0;
    visibility: collapse;
    &:deep(.animate-entity) {
      opacity: 0;
      visibility: collapse;
    }
  }
}
@media (min-width: 768px) {
  #project-entries-wrapper {
    height: vars.$content-min-height;
  }
}
</style>
