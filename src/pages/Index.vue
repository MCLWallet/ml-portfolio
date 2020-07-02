<template>
  <Layout>
    <!-- TODO: Text Content -->
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
      <SectionContent v-for="project in sortArr($static.projects.edges)" 
                      :key="project.node.id"
                      :delay="0"
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
      <SectionContent v-for="job in sortArr($static.jobs.edges)" 
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
      <SectionContent v-for="education in $static.education.edges" 
                      :key="education.node.id"
                      :title="education.node.titel"
                      :firm="education.node.firma"
                      :location="education.node.ort"
                      :details="education.node.details"
                      :anfang="education.node.anfang"
                      :ende="education.node.ende"/>
    </div>
    

    <!-- Programmierkenntnisse -->
    <SectionHeading title="Programmierkenntnisse" icon="code-slash"/>
    <SkillsContent :array="$static.skills.edges"/>

    <!-- Hobbies -->
    <SectionHeading title="Hobbies & andere Leidenschaften" icon="controller"/>
    <SkillsContent :array="$static.hobbies.edges"/>

  </b-container>
  </Layout>
</template>


<static-query>
query {
  jobs: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Beruf" } }
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
  projects: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Projekt" } }
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
  education: allFirma(
    sortBy: "ende"
    order: DESC
    filter: { art: { eq: "Ausbildung" } }
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
import SectionHeading from '~/components/Section-Heading.vue'
import SectionContent from '~/components/Section-Content.vue'
import SkillsContent from '~/components/Skills-Content.vue'
import Logo from '~/components/Logo.vue'
import Links from '~/components/Links.vue'

export default {
  components: {
    SectionHeading,
    SectionContent,
    SkillsContent,
    Logo,
    Links
  },
  metaInfo: {
    title: 'CV'
  },
  props: {
    darkmode: Boolean
  },
  methods: {
    sortArr(arr) {
      return arr.slice().sort((a, b) => (a.node.order < b.node.order) ? 1 : -1)
    }
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
