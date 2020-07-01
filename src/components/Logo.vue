<template>
  <div class="logo">
    <div class="logo-name mb-1">
      {{ $static.metadata.siteName }}
    </div>
    <div class="logo-tagline">
      Full-Stack Developer
    </div>
  </div>
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

}
</script>

<style>
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
  @media screen and (max-width: 767px) {
    .logo-name {
      line-height: 0.8em;
    }
    .logo-tagline {
      line-height: 1.2em;
    }
  }
</style>