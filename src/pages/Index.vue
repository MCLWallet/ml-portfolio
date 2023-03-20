<template>
  <Layout>
    <Header @switchDarkMode="switchDarkMode($event)"
            @handleLanguageSwitch="handleLanguageSwitch($event)"
            :darkmode="darkmode"/>
    <b-container>
      <b-row>
        <b-col cols="12">
          <Logo/>
          <Links :darkmode="darkmode"/>
        </b-col>
      </b-row>
    </b-container>
    
    <b-container class="my-5">

      <!-- Berufserfahrung -->
      <div class="mb-4">
        <SectionHeading 
          :title="currentLanguage == 'Deutsch' ? 'Unternehmen & Kollektive' : 'Companies & Collectives'" 
          icon="gear-fill"/>
        <div v-if="currentLanguage == 'Deutsch'">
          <SectionContent v-for="job in sortArr($static.jobsGerman.edges)" 
                        :key="job.node.id"
                        :delay="0"
                        :title="job.node.titel"
                        :firm="job.node.firma"
                        :location="job.node.ort"
                        :details="job.node.details"
                        :anfang="job.node.anfang"
                        :ende="job.node.ende"
                        :currentLanguage="currentLanguage"
                        />
        </div>
        <div v-else>
          <SectionContent v-for="job in sortArr($static.jobsEnglish.edges)" 
                        :key="job.node.id"
                        :delay="0"
                        :title="job.node.titel"
                        :firm="job.node.firma"
                        :location="job.node.ort"
                        :details="job.node.details"
                        :anfang="job.node.anfang"
                        :ende="job.node.ende"
                        :currentLanguage="currentLanguage"
                        />
        </div>
      </div>

      <!-- Projekterfahrung -->
      <div class="mb-4">
        <SectionHeading
          :title="currentLanguage == 'Deutsch' ? 'Projekterfahrung' : 'Project Experience'"
          icon="folder"/>
        <div v-if="currentLanguage == 'Deutsch'">
          <SectionContent v-for="project in sortArr($static.projectsGerman.edges)" 
                        :key="project.node.id"
                        :title="project.node.titel"
                        :firm="project.node.firma"
                        :location="project.node.ort"
                        :details="project.node.details"
                        :anfang="project.node.anfang"
                        :ende="project.node.ende"
                        :currentLanguage="currentLanguage"
                        isProject/>
        </div>
        <div v-else>
          <SectionContent v-for="project in sortArr($static.projectsEnglish.edges)" 
                        :key="project.node.id"
                        :title="project.node.titel"
                        :firm="project.node.firma"
                        :location="project.node.ort"
                        :details="project.node.details"
                        :anfang="project.node.anfang"
                        :ende="project.node.ende"
                        :currentLanguage="currentLanguage"
                        isProject/>
        </div>
      </div>

      <!-- Ausbildung -->
      <div class="mb-4">
        <SectionHeading 
          :title="currentLanguage == 'Deutsch' ? 'Ausbildung' : 'Education'" 
          icon="journals"/>
        <div v-if="currentLanguage == 'Deutsch'">
          <SectionContent v-for="education in sortArr($static.educationGerman.edges)"
                        :key="education.node.id"
                        :title="education.node.titel"
                        :firm="education.node.firma"
                        :location="education.node.ort"
                        :details="education.node.details"
                        :anfang="education.node.anfang"
                        :ende="education.node.ende"
                        :currentLanguage="currentLanguage"
                        />
        </div>
        <div v-else>
          <SectionContent v-for="education in sortArr($static.educationEnglish.edges)"
                        :key="education.node.id"
                        :title="education.node.titel"
                        :firm="education.node.firma"
                        :location="education.node.ort"
                        :details="education.node.details"
                        :anfang="education.node.anfang"
                        :currentLanguage="currentLanguage"
                        :ende="education.node.ende"
                        />
        </div>
      </div>

      <!-- Programmierkenntnisse -->
      <SectionHeading 
        :title="currentLanguage == 'Deutsch' ? 'Programmierkenntnisse' : 'Programming Experience'" 
        icon="code-slash"/>
      <SkillsContent :array="$static.programmingLanguages.edges"/>

      <!-- Frameworks & Libraries -->
      <SectionHeading 
        title="Frameworks & Libraries" 
        icon="book"/>
      <SkillsContent :array="$static.frameworksLibraries.edges"/>

      <!-- CMS -->
      <SectionHeading 
        title="CMS" 
        icon="newspaper"/>
      <SkillsContent :array="$static.cms.edges"/>

      <!-- Cloud Services -->
      <SectionHeading 
        title="Cloud Services" 
        icon="cloud"/>
      <SkillsContent :array="$static.cloudServices.edges"/>

      <!-- Software -->
      <SectionHeading 
        title="Software" 
        icon="laptop"/>
      <SkillsContent :array="$static.software.edges"/>

      <!-- Design -->
      <SectionHeading 
        title="Design" 
        icon="flower1"/>
      <SkillsContent :array="$static.design.edges"/>

      <!-- Videospiele -->
      <SectionHeading 
        :title="currentLanguage == 'Deutsch' ? 'Videospiele die ich mag' : 'Videogames that I like'"  
        icon="controller"/>
      <SkillsContent :array="$static.videoGames.edges"/>

      <!-- Hobbies -->
      <SectionHeading 
        :title="currentLanguage == 'Deutsch' ? 'Hobbies & andere Leidenschaften' : 'Hobbies & other passions'"
        icon="heart"/>
      <SkillsContent :array="currentLanguage == 'Deutsch' ? $static.hobbiesGerman.edges : $static.hobbiesEnglish.edges"/>
      
      <!-- TODO: Refactoring -->
    </b-container>

    <Footer :currentLanguage="currentLanguage"/>

  </Layout>
</template>


<static-query>
query {
  jobsGerman: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Beruf" }, sprache: { eq: "Deutsch" } }
  ) {
    edges {
      node {
        id
        titel
        firma
        ort
        anfang
        ende
        details
        order
      }
    }
  },
  jobsEnglish: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Beruf" }, sprache: { eq: "Englisch" } }
  ) {
    edges {
      node {
        id
        titel
        firma
        ort
        anfang
        ende
        details
        order
      }
    }
  },
  projectsGerman: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Projekt" }, sprache: { eq: "Deutsch" } }
  ) {
    edges {
      node {
        id
        titel
        firma
        anfang
        ende
        details
        order
      }
    }
  },
  projectsEnglish: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Projekt" }, sprache: { eq: "Englisch" } }
  ) {
    edges {
      node {
        id
        titel
        firma
        anfang
        ende
        details
        order
      }
    }
  },
  educationGerman: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Ausbildung" }, sprache: { eq: "Deutsch" } }
  ) {
    edges {
      node {
        id
        titel
        firma
        ort
        anfang
        ende
        details
        art
        order
        sprache
      }
    }
  },
  educationEnglish: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Ausbildung" }, sprache: { eq: "Englisch" } }
  ) {
    edges {
      node {
        id
        titel
        firma
        ort
        anfang
        ende
        details
        art
        order
        sprache
      }
    }
  },
  programmingLanguages: allSkill(filter: {art: {eq: "Programmiersprache"}}) {
    edges {
      node {
        id
        skill
      }
    }
  },
  frameworksLibraries: allSkill(filter: {art: {eq: "Frameworks & Libraries"}}) {
    edges {
      node {
        id
        skill
      }
    }
  },
  cms: allSkill(filter: {art: {eq: "CMS"}}) {
    edges {
      node {
        id
        skill
      }
    }
  },
  cloudServices: allSkill(filter: {art: {eq: "Cloud Dienst"}}) {
    edges {
      node {
        id
        skill
      }
    }
  },
  software: allSkill(filter: {art: {eq: "Software"}}) {
    edges {
      node {
        id
        skill
      }
    }
  },
  design: allSkill(filter: {art: {eq: "Design"}}) {
    edges {
      node {
        id
        skill
      }
    }
  },
  videoGames: allSkill(filter: {art: {eq: "Videospiele"}}) {
    edges {
      node {
        id
        skill
      }
    }
  },
  hobbiesGerman: allSkill(filter: {art: {eq: "Sonstiges"}, sprache: {contains: "Deutsch"}}) {
    edges {
      node {
        id
        skill
      }
    }
  }
  hobbiesEnglish: allSkill(filter: {art: {eq: "Sonstiges"}, sprache: {contains: "Englisch"}}) {
    edges {
      node {
        id
        skill
      }
    }
  }

}
</static-query>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import SectionHeading from '~/components/Section-Heading.vue'
import SectionContent from '~/components/Section-Content.vue'
import SkillsContent from '~/components/Skills-Content.vue'
import Logo from '~/components/Logo.vue'
import Links from '~/components/Links.vue'

export default {
  components: {
    Header,
    SectionHeading,
    SectionContent,
    SkillsContent,
    Logo,
    Links,
    Footer
  },
  data() {
    return {
      darkmode: false,
      currentLanguage: 'Deutsch'
    }
  },
  metaInfo: {
    title: 'CV'
  },
  methods: {
    sortArr(arr) {
      return arr.slice().sort((a, b) => (a.node.order < b.node.order) ? 1 : -1)
    },
    switchDarkMode(darkmode) {
      if (darkmode) {
        document.body.classList.add("dark-mode")
      }
      else {
        document.body.classList.remove("dark-mode")
      }
      this.darkmode = darkmode
    },
    handleLanguageSwitch(lang) {
      this.currentLanguage = lang
    },
  },
  mounted() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
    this.switchDarkMode(prefersDarkScheme.matches)
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
      if (e.matches) {
        document.querySelector("body").classList.add("dark-mode")
      }
      else {
        document.querySelector("body").classList.remove("dark-mode")
      }
      // TODO: fix dark mode switcher when automatically set to dark mode
    })
  }
}
</script>

<style>
  .links {
    display: flex;
    justify-content: center;
  }
  .linkedin-icon {
    width: 32px;
    height: 32px;
  }
</style>
