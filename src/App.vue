<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { inject, onMounted, onUnmounted } from 'vue'
const firstName = inject('firstName') as string
const firstNameOfficial = inject('firstNameOfficial') as string

onMounted(() => {
  window.addEventListener("scroll", function () {
    const header = document.getElementsByTagName("header");
    const nav_classes = header[0].classList;
    if (document.documentElement.scrollTop != 0) {
      if (nav_classes.contains("shrink") === false) {
        nav_classes.toggle("shrink");
      }
    }
    else {
      if (nav_classes.contains("shrink") === true) {
        nav_classes.toggle("shrink");
      }
    }
  })
})

</script>

<template>
  <div id="pageWrapper">
    <header>
      <div id="name">
        <RouterLink to="/">{{ firstName }} hornung</RouterLink>
      </div>

      <nav>
        <RouterLink to="/code">code</RouterLink>
        <RouterLink to="/music">music</RouterLink>
        <RouterLink to="/graphics">graphics</RouterLink>
        <RouterLink to="/web">web</RouterLink>
        <RouterLink to="/film-video">film+video</RouterLink>
      </nav>
    </header>
    <div id="contentWrapper">
      <RouterView id="content" v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
      <footer>&#169; {{ firstNameOfficial }} Hornung | <RouterLink to="/privacy">privacy policy</RouterLink>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/css/main.scss';

@media (max-width: 767px) {
  nav {
    flex-wrap: wrap;

    a:not(:last-child)::after {
      content: ',';
      color: main.$color-text;
    }
  }

  header {
    padding: main.$app-padding;
    z-index: 99;
  }

  .shrink {
    font-size: 2rem !important;
    line-height: 1 !important;
    gap: 0 !important;
    $small-padding: calc(main.$app-padding / 2);
    padding: $small-padding main.$app-padding $small-padding main.$app-padding;
    width: 100%;
    box-shadow: 0 2.5px 0px main.$c-main;
  }
}

#pageWrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: calc(100vh - 2 * main.$app-padding - 1.5rem);
  // max-width: 1024px;
  margin: auto;
}

#contentWrapper {
  width: 100%;
  padding: 0 main.$app-padding 0 main.$app-padding;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  display: flex;
  position: sticky;
  gap: 1rem;
  top: 0;
  flex-direction: column;
  place-items: left;
  line-height: 1.5;
  font-size: 2.25rem;
  font-family: 'Arial Black' !important;
  background-color: main.$color-background;
  // transitions
  transition: font-size 1s, gap 1s, padding 1s, box-shadow 1s;
}

footer {
  text-align: center;
}

#name {
  margin: 0;
  text-align: left;
  line-height: 0.75;


  &::after {
    content: '.';
    color: main.$color-main;
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
  margin: 0 0 1rem;
  min-height: 88vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  header {
    position: sticky;
    padding-top: 0;
    top: main.$app-padding;
  }

  #pageWrapper {
    flex-direction: row;
  }

  nav {
    flex-direction: column;
  }
}
</style>
