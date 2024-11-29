<script setup lang="ts"></script>

<template>
  <main>
    <Transition enter-active-class="animate__animated animate__fadeIn" appear>
      <iframe id="soundcloud" scrolling="no" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1594807575&color=%230040ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </Transition>
    <Transition enter-active-class="animate__animated animate__fadeIn animate__delay-0300ms" appear>
      <iframe id="spotify" src="https://open.spotify.com/embed/artist/0JgFhRX2Rccdyf5gePLNHO?theme=0" frameborder="0"
        allowfullscreen="false"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </Transition>
  </main>
</template>

<style scoped>
#soundcloud {
  width: 100%;
  height: 200px;
}

#spotify {
  border-radius: 12px;
  width: 100%;
  height: 725px;
}
</style>
