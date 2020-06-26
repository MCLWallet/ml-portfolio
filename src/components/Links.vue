<template>
  <div class="links">
    <!-- GitHub Link -->
    <a  href="https://github.com/MCLWallet" 
        title="GitHub" 
        target="_blank"
        @mouseover="gitHubHovered = true"
        @mouseout="gitHubHovered = false">

      <g-image v-if="!darkmode" src="~/assets/GitHub-dark.png"></g-image>
      <g-image v-else src="~/assets/GitHub-light.png"></g-image>
      <span v-show="gitHubHovered">GitHub</span>
    
    </a>
    <!-- CodePen Link -->
    <a href="https://codepen.io/marcell_lanczos" title="CodePen" target="_blank">
      <g-image v-if="!darkmode" src="~/assets/codepen-dark.png" width="32"></g-image>
      <g-image v-else src="~/assets/codepen-light.png" width="32"></g-image>
    </a>
    <!-- LinkedIn Link -->
    <a href="https://www.linkedin.com/in/marcell-lanczos-32b2191a5/" title="LinkedIn" target="_blank">
      <LinkedInIcon class="linkedin-icon"/>
    </a>
  </div>
</template>


<script>
import LinkedInIcon from '~/assets/Linkedin_icon.svg'

export default {
  components : {
    LinkedInIcon
  },
  data() {
    return {
      gitHubHovered: false
    }
  },
  props: {
    darkmode: Boolean
  },
  methods: {
    switchDarkMode() {
      if (!this.darkmode) {
        document.body.classList.add("dark-mode")
      }
      else {
        document.body.classList.remove("dark-mode")
      }
      this.darkmode = !this.darkmode
    }
  },
  computed: {
    darkMode() {
      return document.body.classList.contains("dark-mode")
    }
  }
}
</script>

<style>
  .dark-mode .linkedin-icon {
    fill:#fff;
  }
</style>