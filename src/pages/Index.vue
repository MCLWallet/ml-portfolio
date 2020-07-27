<template>
  <Layout>
    <Header @switchDarkMode="switchDarkMode($event)"
            @handleLanguageSwitch="handleLanguageSwitch($event)"/>
    <b-container>
      <b-row>
        <b-col cols="12">

          <Logo/>
          <Links :darkmode="darkmode"/>
        </b-col>

      </b-row>

    </b-container>
  

    <b-container class="my-5">
      <!-- Projekterfahrung -->
      <div class="mb-4">
        <SectionHeading title="Projekterfahrung" icon="folder"/>
        <SectionContent v-for="project in sortArr($static.projectsGerman.edges)" 
                        :key="project.node.id"
                        :title="project.node.titel"
                        :firm="project.node.firma"
                        :location="project.node.ort"
                        :details="project.node.details"
                        :anfang="project.node.anfang"
                        :ende="project.node.ende"
                        isProject/>
      </div>
      <!-- Berufserfahrung -->
      <div class="mb-4">
        <SectionHeading title="Unternehmen & Kollektive" icon="gear-fill"/>
        <SectionContent v-for="job in sortArr($static.jobsGerman.edges)" 
                        :key="job.node.id"
                        :delay="0"
                        :title="job.node.titel"
                        :firm="job.node.firma"
                        :location="job.node.ort"
                        :details="job.node.details"
                        :anfang="job.node.anfang"
                        :ende="job.node.ende"/>
      </div>
      
      <!-- Ausbildung -->
      <div class="mb-4">
        <SectionHeading title="Ausbildung" icon="book"/>
        <div v-if="currentLanguage == 'Deutsch'">
          <SectionContent v-for="education in $static.educationGerman.edges"
                        :key="education.node.id"
                        :title="education.node.titel"
                        :firm="education.node.firma"
                        :location="education.node.ort"
                        :details="education.node.details"
                        :anfang="education.node.anfang"
                        :ende="education.node.ende"/>
        </div>
        <div v-else>
          <SectionContent v-for="education in $static.educationEnglish.edges"
                        :key="education.node.id"
                        :title="education.node.titel"
                        :firm="education.node.firma"
                        :location="education.node.ort"
                        :details="education.node.details"
                        :anfang="education.node.anfang"
                        :ende="education.node.ende"/>
        </div>
        
      </div>
      

      <!-- Programmierkenntnisse -->
      <SectionHeading title="Programmierkenntnisse" icon="code-slash"/>
      <SkillsContent :array="$static.skills.edges"/>

      <!-- Hobbies -->
      <SectionHeading title="Hobbies & andere Leidenschaften" icon="controller"/>
      <SkillsContent :array="$static.hobbies.edges"/>
      <!-- TODO: Write english content -->
      <!-- TODO: Refactoring -->
    </b-container>
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
  skills: allSkill(filter: {art: {ne: "Sonstiges"}}) {
    edges {
      node {
        id
        skill
      }
    }
  },
  hobbies: allSkill(filter: {art: {eq: "Sonstiges"}}) {
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
    Links
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
      if (!this.darkmode) {
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
