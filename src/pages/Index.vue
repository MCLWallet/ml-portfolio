<template>
  <Layout>

    
  <g-link class="logo" to="/">
    <div class="logo-name">
      {{ $static.metadata.siteName }}
    </div>
    <div class="logo-tagline">
      Full-Stack Developer
    </div>
  </g-link>

  <b-container fluid>
    <!-- Berufserfahrung -->
    <SectionHeading title="Berufserfahrung" icon="briefcase"/>
    <SectionContent/>

    <!-- Ausbildung -->
    <SectionHeading title="Ausbildung" icon="book"/>

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
h1 {
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 200;
}
</style>
