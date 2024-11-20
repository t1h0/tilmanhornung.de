<script setup lang="ts">
import ProjectEntry from '../components/ProjectEntry.vue'
const entries = [
  {
    title: 'ideologywatch',
    links: [{ title: 'source code', url: 'https://github.com/t1h0/ideologywatch' }]
  },
  {
    title: 'nomopytools',
    links: [{ title: 'source code', url: 'https://github.com/t1h0/nomopytools' }]
  },
  {
    title: 'smartini',
    links: [{ title: 'source code', url: 'https://github.com/t1h0/smartini' }]
  },
  {
    title: 'textalysis',
    links: [
      { title: 'info', url: 'https://textalysis.org' },
      { title: 'newsalyze', url: 'https://newsalyze.org' }
    ]
  },
  {
    title: 'bundestag party closeness',
    links: [
      { title: 'term paper', url: '/pdf/bundestag_closeness.pdf' },
      { title: 'source code', url: 'https://github.com/t1h0/party-closeness-bundestag' }
    ]
  }
]
</script>

<template>
  <main>
    <ProjectEntry class="ProjectEntry" v-for="entry in entries" :key="entry.title" :="entry" />
    <div id="github">
      <a href="https://github.com/t1h0" target="_blank">
        <h1>Github</h1>
      </a>
    </div>
  </main>
</template>

<style>
#github {
  margin-top: 1rem;
}

#github h1::before {
  content: '> ';
}

.ProjectEntry:not(:last-child) {
  margin-bottom: 3rem;
}

h1 {
  font-size: var(--h2);
}

.ProjectEntry h2 {
  font-size: var(--h3);
}

.ProjectEntry #links {
  line-height: 1;
}
</style>
