<script setup lang="ts">
import ProjectEntry from '@/components/ProjectEntry.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const entries = [
  {
    title: 'tilmanhornung.de',
    charsPerRow: 4,
    mainLink: 'https://github.com/t1h0/tilmanhornung.de',
    description:
      "this website's source code, showcasing my frontend skills with Vue.js, GSAP and more."
  },
  {
    title: 'smartini',
    charsPerRow: 4,
    mainLink: 'https://github.com/t1h0/smartini',
    description:
      "my first python package, showcasing my python skills. intelligent and easy-to-use integration of ini configuration files. so your non-coder friends can setup your latest software (when you're again too lazy to design a gui)."
  },
  {
    title: 'ideologywatch',
    charsPerRow: 5,
    mainLink: 'https://github.com/t1h0/ideologywatch',
    description:
      'my latest project, showcasing my machine learning skills. I train a classifier on Bundestag speeches to investigate similarities between single politicians and parties.'
  },
  {
    title: 'nomopytools',
    charsPerRow: 4,
    mainLink: 'https://github.com/t1h0/nomopytools',
    description:
      'python helper classes and functions I frequently use for machine learning, web design and more.'
  },
  {
    title: 'textalysis',
    charsPerRow: 5,
    mainLink: 'https://textalysis.org',
    description:
      'the research group I was part of to use natural language processing for analyzing news articles.',
    links: [{ title: 'newsalyze', url: 'https://newsalyze.org' }]
  },
  {
    title: 'bundestag party closeness',
    charsPerRow: 5,
    mainLink: 'https://github.com/t1h0/party-closeness-bundestag',
    description:
      "the foundation for ideologywatch. simple machine learning techniques revealed surprising patterns between politicians' speeches and party manifestos.",
    links: [{ title: 'term paper', url: '/pdf/bundestag_closeness.pdf' }]
  }
]

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
