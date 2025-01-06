<script setup lang="ts">
import CVGroup from '@/components/CVGroup.vue'
import { inject } from 'vue'
import { getAnimationDelay } from '@/ts/functions'
import { CVGroups } from '@/content/home'
const noPic = inject('noPic') as boolean
</script>

<template>
  <main>
    <div id="left" class="column">
      <Transition enter-active-class="animate__animated animate__fadeIn" appear>
        <div id="slogan">creativity in<br />art and numbers.</div>
      </Transition>
      <h2 id="linkedin" class="arrowLink">
        <a href="https://linkedin.com/in/tilmanhornung" target="_blank">LinkedIn</a>
      </h2>
      <div id="cv">
        <Transition
          v-for="(group, i) in CVGroups"
          :key="group.title"
          :enter-active-class="`animate__animated animate__fadeIn animate__delay-${getAnimationDelay(i, 500)}ms`"
          appear
        >
          <CVGroup :="group" class="cvgroup" />
        </Transition>
      </div>
    </div>
    <Transition enter-active-class="animate__animated animate__fadeIn animate__delay-0600ms" appear>
      <div id="right" v-if="!noPic" class="column">
        <img id="portrait" src="/src/assets/img/portrait.jpg" />
      </div>
    </Transition>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/css/main.scss';
@use '@/assets/css/vars.scss';
@use 'sass:map';

@media (max-width: 1023px) {
  main {
    flex-direction: column;
  }
}

main {
  display: flex;
  gap: 1rem;
}

#left {
  flex: 75%;
}

#right {
  display: flex;
  flex: 1 0 25%;
  align-items: flex-end;
  justify-content: center;
  position: sticky;
  top: 0;
}

#portrait {
  width: 100%;
  object-fit: cover;
  position: sticky;
  top: vars.$app-padding;
}

#linkedin {
  display: none;
  margin: 1rem 0;
}

#cv {
  margin: 1rem 0;
}

#slogan {
  @extend h1;
  border-left: medium solid #929292;
  $small-line-height: map.get(vars.$headings, h1);
  line-height: small-line-height;
  /* Adjusts for smaller line-height */
  margin: 0 0 0.5rem;
  padding-left: 1rem;
}

.cvgroup {
  &:not(:first-child) {
    margin-top: 1rem;
  }

  &:deep(.cventry h1) {
    @extend h3;
  }

  &:deep(.cventry h2) {
    @extend h4;
  }
}

@media (min-width: 1024px) {
  #portrait {
    display: None;
  }

  #right {
    height: 100vh;
    background-image: url('/src/assets/img/portrait.jpg');
    background-size: cover;
    background-position-x: 46%;
  }
}
</style>
