<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { inject, onMounted, onUnmounted } from 'vue'
const firstName = inject('firstName') as string
const firstNameOfficial = inject('firstNameOfficial') as string

onMounted(() => {
  window.addEventListener('scroll', function () {
    const header = document.getElementsByTagName('header')
    const nav_classes = header[0].classList
    if (document.documentElement.scrollTop != 0) {
      if (nav_classes.contains('shrink') === false) {
        nav_classes.toggle('shrink')
      }
    } else {
      if (nav_classes.contains('shrink') === true) {
        nav_classes.toggle('shrink')
      }
    }
  })
})
</script>

<template>
  <header>
    <div id="name">
      <RouterLink to="/">{{ firstName }} hornung</RouterLink>
    </div>

    <nav>
      <RouterLink to="/code">code</RouterLink>
      <RouterLink to="/music">music</RouterLink>
      <RouterLink to="/graphics">graphics</RouterLink>
      <!-- <RouterLink to="/web">web</RouterLink> -->
      <RouterLink to="/film-video">film+video</RouterLink>
    </nav>
  </header>
  <div id="content-footer-wrapper">
    <RouterView id="content" v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
    <footer>
      &#169; {{ firstNameOfficial }} Hornung |
      <RouterLink to="/privacy">privacy policy</RouterLink>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/css/vars.scss';

@media (max-width: 767px) {
  nav {
    flex-wrap: wrap;

    a:not(:last-child)::after {
      content: ',';
      color: vars.$color-text;
    }
  }

  header {
    padding: vars.$app-padding;
    z-index: 99;
  }

  .shrink {
    font-size: 2rem !important;
    line-height: vars.$header-shrink-line-height !important;
    gap: 0 !important;
    padding: vars.$small-app-padding vars.$app-padding vars.$small-app-padding vars.$app-padding;
    width: 100%;
    box-shadow: 0 vars.$header-shrink-box-shadow 0px vars.$c-main;
  }
}

#content-footer-wrapper {
  width: 100%;
  padding: 0 vars.$app-padding 0 vars.$app-padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

header {
  display: flex;
  position: sticky;
  gap: vars.$content-footer-gap;
  top: 0;
  flex-direction: column;
  place-items: left;
  line-height: 1.5;
  font-size: 2.25rem;
  font-family: 'Arial Black' !important;
  background-color: vars.$color-background;
  // transitions
  transition:
    font-size 1s,
    gap 1s,
    padding 1s,
    box-shadow 1s;
}

footer {
  text-align: center;
  line-height: vars.$footer-line-height;
}

#name {
  margin: 0;
  text-align: left;
  line-height: 1.75rem;

  &::after {
    content: '.';
    color: vars.$color-main;
  }
}

nav {
  display: flex;
  flex-direction: row;
  text-align: left;

  a {
    padding: 0 0 0;

    &.router-link-exact-active:hover {
      background-color: transparent;
    }

    &:first-of-type {
      border: 0;
    }
  }
}

#content {
  width: 100%;
  min-height: vars.$content-min-height;
}

@media (min-width: 768px) {
  header {
    position: sticky;
    padding-top: 0;
    top: vars.$app-padding;
  }

  nav {
    flex-direction: column;
  }
}
</style>
