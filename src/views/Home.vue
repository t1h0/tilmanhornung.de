<script setup lang="ts">
import CVGroup from '../components/CVGroup.vue'
import { inject } from 'vue'
const noPic = inject('noPic') as boolean
const CVGroups = [
  {
    title: 'work',
    entries: [
      {
        title: 'software developer',
        subtitle: 'self-employed',
        place: 'berlin',
        start: '01/2024',
        end: '10/2024'
      },
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
        subtitleUrl: 'https://www.hadw-bw.de',
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
        subtitleUrl: 'https://spielaktion.de',
        start: '11/2015',
        end: '12/2016'
      },
      {
        title: 'photographer',
        subtitle: 'vogelfrei',
        subtitleUrl: 'https://www.facebook.com/Vogelfreitrier',
        place: 'trier',
        start: '2015',
        end: '2018'
      },
      {
        title: 'web designer',
        subtitle: 'freelancer',
        start: 'since 2011',
      },
    ]
  },
  {
    title: 'art',
    entries: [
      {
        title: 'graphic designer',
        subtitle: 'cover and album art',
        start: 'since 2013'
      },
      {
        title: 'filmmaker',
        subtitle: 'director | cinematographer | cutter | screenwriter',
        start: 'since 2011'
      },
      {
        title: 'bass player & singer',
        subtitle: 'gentree',
        subtitleUrl: 'https://open.spotify.com/artist/0JgFhRX2Rccdyf5gePLNHO',
        start: 'since 2011',
      },
      {
        title: 'solo artist',
        subtitle: 'singer | pianist | guitarist',
        start: 'since 2007',
      },
    ]
  },
  {
    title: 'education',
    entries: [
      {
        title: 'M.Sc. social and economic data science',
        place: 'konstanz',
        subtitle: 'university of konstanz',
        start: '10/2020',
        end: '03/2022'
      },
      {
        title: 'human factors',
        place: 'berlin',
        subtitle: 'tu berlin',
        start: '10/2018',
        end: '09/2019'
      },
      {
        title: 'B.Sc. psychology',
        subtitle: 'university of trier',
        place: 'trier',
        start: '10/2014',
        end: '09/2018'
      }
    ]
  },
  {
    title: 'volunteering',
    entries: [
      {
        title: 'youth worker | head of community',
        place: 'bonn',
        subtitle: 'katholische junge gemeinde',
        start: '2010',
        end: '2014 & 2018'
      },
    ]
  }
]
</script>

<template>
  <main>
    <div id="left" class="column">
      <div id="slogan">creativity in<br />art and numbers.</div>
      <h2 id="linkedin" class="arrowLink">
        <a href="https://linkedin.com/in/tilmanhornung" target="_blank">LinkedIn</a>
      </h2>
      <div id="cv">
        <CVGroup v-for="group in CVGroups" :key="group.title" :="group" class="cvgroup" />
      </div>
    </div>
    <div id="right" v-if="!noPic" class="column">
      <img id="portrait" src="/src/assets/img/portrait.jpg" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../assets/css/headings.scss';

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
  background-image: url('/src/assets/img/portrait.jpg');
  background-size: cover;
  background-position-x: 46%;
}

#portrait {
  width: 100%;
  object-fit: cover;
  position: sticky;
  top: var(--app-padding);
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
  --small-line-height: var(--h1);
  line-height: var(--small-line-height);
  /* Adjusts for smaller line-height */
  margin: 0 0 calc(var(--h1-line-height) - var(--small-line-height));
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
  }
}
</style>
