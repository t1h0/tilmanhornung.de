<script setup lang="ts">
import CVGroup from '../components/CVGroup.vue'
const CVGroups = [
  {
    title: 'work',
    entries: [
      {
        title: 'full stack & machine learning engineer',
        subtitle: 'textada',
        subtitleUrl: 'https://textada.com',
        place: 'berlin',
        start: '10/2022',
        end: '12/2023'
      },
      {
        title: 'researcher',
        subtitle: 'heidelberg academy of sciences and humanities',
        subtitleUrl: 'https://www.hadw-bw.de/',
        place: 'konstanz',
        start: '10/2022',
        end: '12/2023'
      },
      {
        title: 'python tutor',
        subtitle: 'university of konstanz',
        place: 'konstanz',
        start: '11/2021',
        end: '12/2021'
      },
      {
        title: 'webdesigner',
        subtitle: 'university of konstanz',
        place: 'konstanz',
        start: '10/2021'
      },
      {
        title: 'production and artistic director',
        place: 'trier',
        subtitle: 'mobile spielaktion e.V. Trier',
        start: '11/2015',
        end: '12/2016'
      }
    ]
  },
  {
    title: 'education',
    entries: [
      {
        title: 'M.Sc. social and economic data science',
        place: 'konstanz',
        subtitle: 'university of konstanz',
        start: '10/2018',
        end: '09/2019'
      },
      {
        title: 'human factors',
        place: 'konstanz',
        subtitle: 'tu berlin',
        start: '10/2020',
        end: '03/2022'
      },
      {
        title: 'B.Sc. psychology',
        subtitle: 'university of trier',
        place: 'trier',
        start: '10/2014',
        end: '09/2018'
      }
    ]
  }
]
</script>

<template>
  <main>
    <div id="left" class="column">
      <h1 id="slogan">creativity in<br />art and numbers.</h1>
      <h1 id="linkedin" class="arrowLink">
        <a href="https://linkedin.com/in/tilmanhornung" target="_blank">LinkedIn</a>
      </h1>
      <div id="cv">
        <CVGroup v-for="group in CVGroups" :key="group.title" :="group" />
      </div>
    </div>
    <div id="right" class="column">
      <img id="portrait" src="/src/assets/img/portrait.jpg" />
    </div>
  </main>
</template>

<style scoped>
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
  background-image: url('/src/assets/img/portrait.jpg');
  background-size: cover;
  background-position-x: 45%;
}

#portrait {
  width: 100%;
  object-fit: cover;
  position: sticky;
  top: var(--app-padding);
}

#linkedin {
  font-size: var(--h2);
  margin: 1rem 0;
}

#cv {
  margin: 1rem 0;
}

h1 {
  font-size: var(--h2);
  line-height: 2rem;
}

@media (min-width: 1024px) {
  #portrait {
    display: None;
  }
}
</style>
