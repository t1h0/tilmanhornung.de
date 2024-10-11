<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="wrapper">
    <header>
      <div id="name">
        <RouterLink to="/">tilman hornung</RouterLink>
      </div>

      <nav>
        <RouterLink to="/code">code</RouterLink>
        <RouterLink to="/music">music</RouterLink>
        <RouterLink to="/graphics">graphics</RouterLink>
        <RouterLink to="/web">web</RouterLink>
        <RouterLink to="/film-video">film+video</RouterLink>
      </nav>
    </header>

    <RouterView id="content" v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
  <footer>&#169; Tilman Hornung | <RouterLink to="/privacy">privacy policy</RouterLink>
  </footer>
</template>

<style scoped>
@media (max-width: 767px) {
  nav {
    flex-wrap: wrap;
  }

  nav a:not(:last-child)::after {
    content: ',';
    color: var(--color-text);
  }
}

#wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: calc(100vh - 2 * var(--app-padding) - 1.5rem);
}

header {
  display: flex;
  flex-direction: column;
  place-items: left;
  line-height: 1.5;
  font-size: 2.25rem;
  font-family: 'Arial Black' !important;
  margin-bottom: 1.25rem;
}

footer {
  text-align: center;
}

#name {
  margin: 0;
  text-align: left;
  line-height: 0.75;
}

#name::after {
  content: '.';
  color: var(--color-main);
}

nav {
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-top: 1rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 0 0;
}

nav a:first-of-type {
  border: 0;
}

#content {
  width: 100%;
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
    top: var(--app-padding);
  }

  #wrapper {
    flex-direction: row;
  }

  nav {
    flex-direction: column;
  }
}
</style>
