<template>
  <section class="skills-container">
    <div class="flex flex-col sm:flex-row z-10">
      <div class="header">Skills</div>
      <div class="skill-list">
        <div
          v-for="(skill, skillCategory) in skills"
          :key="skillCategory"
          :data-count="skill.list.length"
        >
          <div
            v-for="skillValue in skill.list"
            :key="skillValue.name"
            class="language"
          >
            <span class="skill-box" :class="skillCategory">
              <i class="devicon-icon" :class="skillValue.icon"></i>
              {{ skillValue.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {
      skills: {
        frontend: {
          label: 'Frontend',
          list: [
            {
              name: 'Svelte',
              icon: 'devicon-svelte-plain'
            },
            {
              name: 'VueJs',
              icon: 'devicon-vuejs-plain'
            },
            {
              name: 'EmberJs',
              icon: 'devicon-ember-original-wordmark'
            },
            {
              name: 'ReactJs',
              icon: 'devicon-react-plain'
            },
            {
              name: 'Redux',
              icon: 'devicon-redux-plain'
            },
            {
              name: 'HTML5',
              icon: 'devicon-html5-plain'
            },
            {
              name: 'CSS3',
              icon: 'devicon-css3-plain'
            },
            {
              name: 'SASS/ SCSS',
              icon: 'devicon-sass-plain'
            },
            {
              name: 'Javascript',
              icon: 'devicon-javascript-plain'
            },
            {
              name: 'jQuery',
              icon: 'devicon-jquery-plain'
            }
          ],
        },
        backend: {
          label: 'Backend',
          list: [
            {
              name: 'Java',
              icon: 'devicon-java-plain'
            },
            {
              name: 'Python',
              icon: 'devicon-python-plain'
            },
            {
              name: 'Node JS',
              icon: 'devicon-nodejs-plain'
            },
            {
              name: 'Ruby on Rails',
              icon: 'devicon-rails-plain'
            },
            {
              name: 'REST API',
              icon: 'devicon-digitalocean-plain'
            },
          ],
        },
        database: {
          label: 'Database',
          list: [
            {
              name: 'PostgreSql',
              icon: 'devicon-postgresql-plain'
            },
            {
              name: 'MySQL',
              icon: 'devicon-mysql-plain'
            },
          ],
        },
        others: {
          label: 'Others',
          list: [
            {
              name: 'Git',
              icon: 'devicon-git-plain'
            },
            {
              name: 'AWS',
              icon: 'devicon-amazonwebservices-plain'
            },
            {
              name: 'DigitalOcean',
              icon: 'devicon-digitalocean-plain'
            },
          ],
        },
      },
    }
  },
})
</script>

<style lang='scss' scoped>
.skills-container {
  @apply block pt-10 sm:py-12 px-10 pb-10 from-gray-100 to-gray-500 dark:from-gray-500 dark:to-gray-100 shadow-lg rounded-b-2xl;
}

.language {
  @apply relative w-36 h-10 transition-all duration-300 ease-out;

  transform: rotateX(45deg) rotateZ(45deg) translateZ(0);

  @for $i from 1 through 11 {
    &:nth-child(#{$i}) {
      z-index: #{11 - $i};
      transform: rotateX(45deg) rotateZ(45deg) translateZ(0);
    }
  }
  &:hover {
    transform: translateY(-70px) rotateX(0deg) rotateZ(0deg) translateZ(4rem)
      scale(1.7);
    z-index: 30;

    &::after {
      content: '';
      @apply absolute h-40 w-full bottom-0 transform scale-125;
    }
  }

  .skill-box {
    @apply bg-gray-700 dark:bg-gray-400 text-gray-100 dark:text-gray-800 font-montserrat w-36 h-36 rounded-lg flex flex-col items-center justify-end border-2 border-white absolute left-0 bottom-0;

    box-shadow: 20px 18px 10px 0 rgb(0 0 0 / 15%);

    &.database {
      @apply bg-blue-300 dark:bg-blue-100;
    }
    &.frontend {
      @apply bg-blue-500 dark:bg-blue-300;
    }
    &.backend {
      @apply bg-gray-500 dark:bg-gray-300;
    }

    .devicon-icon {
      @apply w-20 h-20 text-white dark:text-gray-900;
       &::before {
        @apply text-6xl;
      }
    }
  }
}

.header {
  @apply flex items-center justify-center px-10 py-4 font-montez w-full text-4xl font-bold mb-20 md:mb-4 md:text-9xl;
}

.skill-list {
  @apply flex flex-wrap flex-row gap-16 max-w-screen-md relative items-end;
}

@screen md {
  .skills-container {
    @apply flex flex-wrap gap-8 relative justify-center items-center px-0 relative;
  }
}
</style>