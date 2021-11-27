<template>
  <section id="timeline" class="timeline">
    <div class="timeline-container">
      <h1 class="text-2xl font-bold font-montez mt-10 text-4xl text-center">
        Timeline
      </h1>
      <div
        v-for="bio in bios"
        :key="bio.orgName"
        class="timeline-event"
        v-animate-on-scroll
      >
        <div class="timeline-event-icon">
          <i :data-feather="bio.icon" class="text-white"></i>
        </div>
        <div class="timeline-event-sidebar">
          <div class="flex flex-col items-center">
            <img :src="bio.orgSvg" class="timeline-logo" />
            <div class="mt-4 text-sm">{{ bio.period }}</div>
          </div>

          <a :href="bio.link" v-show="bio.link" class="timeline-link">
            <span class="mr-2">View</span>
            <i data-feather="arrow-right-circle" class="view-project-svg"></i>
          </a>
        </div>
        <div class="timeline-event-content">
          <div class="timeline-event-title">
            {{ bio.title }}
          </div>
          <div class="timeline-event-description">
            <p>{{ bio.desc }}</p>
            <ul>
              <li v-for="(point, pointIndex) in bio.points" :key="pointIndex">
                {{ point }}
              </li>
            </ul>
            <ul class="flex flex-wrap overflow-hidden gap-4 mt-3">
              <li
                v-for="(technology, techIndex) in bio.technologies"
                :key="techIndex"
                class="
                  border border-blue-300
                  rounded-full
                  px-4
                  py-1
                  text-sm
                  shadow-inner
                "
              >
                {{ technology }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="timeline-event" v-animate-on-scroll>
        <div class="timeline-event-icon">
          <i data-feather="book-open" class="text-white"></i>
        </div>
        <div class="timeline-event-sidebar">
          <div class="text-sm my-auto">2011 - 2016</div>
        </div>
        <div class="timeline-event-content">
          <div class="timeline-event-title">
            Vellore Institute of Technology
          </div>
          <div class="timeline-event-sub-title">MS Software Engineering</div>
          <div class="timeline-event-description">
            <p><b>CGPA</b> 8.18</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
export default {
  setup() {
    return {
      bios: [
        {
          orgName: 'Arctype',
          orgSvg: require('assets/logos/arctype.svg'),
          title: 'Senior Software Engineer',
          period: '2021 - Current',
          icon: 'briefcase',
          desc: `Arctype is a startup that focuses on database management and monitoring tool which helps developers manage multiple databases using a web app and desktop application.`,
          points: [
            'Currently, working with React, NodeJs, Electron, etc to help developing an enterprise application for database monitoring',
            'Closely work with the CTO and CEO of the organization to develop the features for the customers which will ease users to have charts and tabular data for monitoring purposes',
          ],
          technologies: [
            'ReactJs',
            'Redux',
            'NodeJs',
            'Express',
            'Postgresql',
            'Mysql',
            'Electron',
            'AWS',
          ],
          link: 'http://arctype.com/',
        },
        {
          orgName: 'CVFactory',
          orgSvg: require('assets/logos/cvfactory.svg'),
          title: 'Full-stack developer',
          period: '2020 – 2021',
          icon: 'briefcase',
          desc: 'CvFactory is part of AlertaEmprega, a job portal for people in Portugal. They have developed a Saas application to generate CVs from predefined templates to which the user can opt for. This is a simple tool for many who would like to develop a Curriculum with ease and by only typing in the details which can help secure a job. These CVs are automatically shared with prospective employers in AlertaEmprega',
          points: [
            'Currently working with Ruby on Rails, PostgreSQL, etc to help develop a Saas Website to create Resumes for the customers, using custom templates which we designed',
            'Closely work with the CTO of the organization to develop, test and deploy the features for customer and administrative use.',
            'Maintains the weekly task and also perform code review',
          ],
          technologies: [
            'Ruby on Rails',
            'Redis',
            'Postgresql',
            'StimulusJs',
            'PrawnPdf',
            'Puppeteer',
          ],
          link: 'https://cvfactory.io/',
        },
        {
          orgName: 'Seabookings',
          orgSvg: require('assets/logos/seabookings.svg'),
          title: 'Full-stack developer',
          period: '2019 - 2020',
          icon: 'briefcase',
          desc: 'Seabookings is a marine tourism e-commerce website that concentrates on creating better tourism opportunities in countries like Portugal, France, Spain, etc.',
          points: [
            'Currently working with Ruby on Rails, PostgreSQL, etc to help develop the marine tourism website: Seabookings',
            'Closely work with the CTO and CEOs of the organization to develop, test and deploy the features for customer and administrative use.',
            'Maintain the weekly task and also perform code review',
          ],
          technologies: [
            'Ruby on Rails',
            'Redis',
            'Postgresql',
            'StimulusJs',
            'VueJs',
            'NuxtJs',
          ],
          link: 'https://www.seabookings.com/',
        },
        {
          orgName: 'Zoho Corporation',
          orgSvg: require('assets/logos/zoho.svg'),
          title: 'Member Technical Staff',
          period: '2016- 2019',
          icon: 'briefcase',
          desc: 'Zoho Corporation is an Indian MNC that concentrates on Saas Applications and Enterprise level Management tool development. It is one of the well-known startups in India and one of the many known organizations that provide “Made In India” Software Solutions',
          points: [
            'Worked on Office365ManagerPlus, an ERP based application for managing Offiice365 services such as Exchange Online, Azure, etc',
            'Worked with EmberJS, Java, PostgreSQL, C++, PowerShell and Graph API, etc to make the application user-friendly and to fetch the information and manipulate it to the user need',
            'Worked on individual modules such as Reports, Schedule Reports and Auditing in the product and done multiple bug and performance issue fixes',
          ],
          technologies: [
            'Java',
            'EmberJs',
            'Postgresql',
            'Office365 Powershell',
            'Azure Powershell',
            'APIs',
          ],
          link: 'https://demo.o365managerplus.com/',
        },
      ],
    }
  },
}
</script>

<style lang='scss' scoped>
.timeline {
  @apply flex relative flex-col py-20 z-10 bg-opacity-50 bg-gray-200 dark:bg-gray-500;
  @apply self-center flex-col;

  &-logo {
    @apply h-16;
  }

  &::after {
    @apply absolute inset-0 opacity-75;

    content: '';
    z-index: -2;
    background: url('assets/svgs/time.svg') left top no-repeat,
      url('assets/svgs/time.svg') right bottom no-repeat;
  }
  &-container {
    @apply flex flex-col max-w-screen-lg mx-auto;
  }

  &-event {
    @apply ml-auto relative flex self-center m-4 my-4 flex-col w-full;

    border-radius: 6px;

    &-sidebar {
      @apply flex items-center justify-between flex-col p-4 bg-gray-200 text-blue-500 dark:bg-gray-600 font-semibold;
      @apply rounded-none text-2xl whitespace-nowrap;
    }

    &-content {
      @apply p-4 rounded-b-md md:rounded-none md:rounded-r-md bg-white dark:bg-gray-800 w-full;

      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    }

    &-icon {
      @apply flex items-center justify-center self-center relative bg-blue-500 dark:bg-gray-600;
      @apply w-full m-0 rounded-t-md p-10;
      svg {
        font-size: 32px;
        @apply absolute text-2xl;
      }
    }

    &:nth-child(2n + 1) {
      @apply mr-auto ml-0;
    }

    &:last-child::before {
      content: none;
    }

    &-description {
      flex-basis: 60%;
    }

    @screen md {
      @apply flex-row max-w-screen-md;

      width: 80vw;
      &-content {
        width: calc(100% - 84px);
      }

      &-icon {
        @apply rounded-full;

        width: 40px;
        margin: 0 20px;
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        &::after {
          @apply absolute w-full left-0 bg-blue-500 dark:bg-gray-600;

          content: '';
          height: 2px;
          z-index: -1;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &-sidebar {
        @apply rounded-l-md;
      }

      &::before {
        @apply absolute bg-blue-500 dark:bg-gray-600 top-1/2;

        content: '';
        width: 2px;
        height: 0%;
        z-index: -1;
        left: 60px;
        transform: translateX(-50%);
      }

      &.enter {
        .timeline-event-icon::after {
          @apply animate-fill-left;
        }
        &::before {
          @apply animate-fill-top;
        }
      }

      &:nth-child(2n + 1) {
        @apply flex-row-reverse;
        .timeline-event-icon::after {
          @apply right-0 left-auto;
        }
        &::before {
          @apply absolute bg-blue-500 dark:bg-gray-600 top-1/2 left-auto;

          content: '';
          width: 2px;
          height: 0%;
          right: 60px;
          z-index: -1;
          transform: translateX(-50%);
        }
        .timeline-event-sidebar {
          @apply rounded-none rounded-r-md;
        }

        .timeline-event-content {
          @apply rounded-none rounded-l-md;
        }
      }

      &.enter:nth-child(2n + 1) .timeline-event-icon::after {
        @apply animate-fill-right;
      }
    }

    @screen lg {
      width: 60vw;
    }
  }

  &-link {
    @apply text-blue-500 px-4 relative pr-10 font-normal dark:text-gray-100;

    .view-project-svg {
      @apply w-6 h-6 absolute inset-0 left-auto my-auto mr-2;
    }

    &:hover {
      .view-project-svg {
        @apply w-8 h-8;
      }
    }
  }

  &-title {
    @apply text-2xl font-bold text-gray-100 dark:text-gray-400 uppercase;

    letter-spacing: 1.5px;
    line-height: 1.4;
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>