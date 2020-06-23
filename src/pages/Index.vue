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

export default {
  metaInfo: {
    title: 'Hello, world!'
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');

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
  text-transform: uppercase;
  font-size: 35px;
  letter-spacing: 6px;
}
</style>
