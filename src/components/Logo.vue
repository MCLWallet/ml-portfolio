<template>
  <div class="logo">
    <b-img 
      v-bind="mainProps"
      rounded="circle" 
      alt="Circle image"
      src="https://media.creativemornings.com/uploads/user/avatar/508113/LM104255-768x1149.jpg">
    </b-img>
    <div class="logo-name mb-1">
      {{ $static.metadata.siteName }}
    </div>
    <div class="logo-tagline">
      Web-/App-Developer
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
  data() {
    return {
      mainProps: { width: 180, height: 180, class: 'mb-4'}
    }
  }
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