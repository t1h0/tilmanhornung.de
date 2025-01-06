<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  title: string
  charsPerRow?: number
  mainLink: string
  description: string
  links?: Array<{ title: string; url: string; description?: string }>
}>()

const flexBasis = ref(props.charsPerRow ? 100 / props.charsPerRow : 100 / (props.title.length / 2))

function getCharStyle() {
  let properties = [`--anim-delay:${Math.random()}s`, `flex-basis:${flexBasis.value}%`]
  return properties.join(';')
}
</script>

<template>
  <div id="entry-wrapper">
    <div id="entry-content-wrapper">
      <h1>
        <a :href="mainLink" target="_blank" id="title">
          <span class="char" :style="getCharStyle()" v-for="char in title" :key="char">{{
            char
          }}</span>
        </a>
      </h1>
      <div id="info-wrapper">
        <h2 id="description" class="animate-entity">{{ description }}</h2>
        <div id="links">
          <div class="link animate-entity" v-for="link in links" :key="link.url">
            <h2 class="arrowLink">
              <a :href="link.url" target="_blank">
                {{ link.title }}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 767px) {
  .link:not(:last-child) {
    margin-right: 1em;
  }
}

#entry-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', Courier, monospace;
}

#entry-content-wrapper {
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

#title {
  display: flex;
  text-align: center;
  flex-flow: row wrap;
  // max-width: 700px;
  justify-content: space-between;

  &:hover {
    span {
      animation: none;
    }
  }

  span {
    animation: toggleVisibility 1.5s infinite;
    animation-delay: var(--anim-delay);
  }
}

#info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

#description {
  // text-align: justify;
}

#links {
  display: flex;
  line-height: 1;
  flex-shrink: 0;
  font-style: italic;
}

@keyframes toggleVisibility {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  #links {
    flex-direction: column;
  }
}
</style>
