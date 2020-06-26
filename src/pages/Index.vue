<template>
  <Layout>

    
  <div class="logo">
    <div class="logo-name">
      {{ $static.metadata.siteName }}
    </div>
    <div class="logo-tagline">
      Full-Stack Developer
    </div>
  </div>

  <b-container class="my-5">
    <!-- Berufserfahrung -->
    <div class="mb-4">
      <SectionHeading title="Berufserfahrung" icon="briefcase"/>
      <SectionContent v-for="job in $static.jobs.edges" 
                      :key="job.node.id"
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

    <!-- Hobbies -->
    <SectionHeading title="Hobbies & andere Leidenschaften" icon="controller"/>

  </b-container>
  </Layout>
</template>


<static-query>
query {
  metadata {
    siteName
  },
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
      }
    }
  }

}
</static-query>

<script>
import SectionHeading from '~/components/Section-Heading.vue'
import SectionContent from '~/components/Section-Content.vue'

export default {
  components: {
    SectionHeading,
    SectionContent
  },
  metaInfo: {
    title: 'Hello, world!'
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap');

.home-links a {
  margin-right: 1rem;
}
.logo {
  text-decoration: none;
  color: #00214d;
  text-align: center;
}
.logo:hover {
  text-decoration: none;
}
.logo-name {
  font-family: 'quenda-medium';
  line-height: 0.6em;
  font-size: 72px;
}
.logo-tagline {
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  font-size: 35px;
  letter-spacing: 6px;
}
</style>
