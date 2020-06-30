<template>
  <div class="links mt-2">
    <!-- Mail Link -->
    <a  href="mailto:marcell@studio-seis.at" 
        title="E-Mail" 
        class="mx-2">
          <b-icon icon="envelope" style="width: 32px; height: 32px;" class="mail-icon"/>
    </a>
    <!-- GitHub Link -->
    <a  href="https://github.com/MCLWallet" 
        title="GitHub" 
        target="_blank"
        class="mx-2">
          <GitHubIcon class="github-icon"/>
    </a>
    <!-- CodePen Link -->
    <a href="https://codepen.io/marcell_lanczos" title="CodePen" target="_blank" class="mx-2">
      <CodePenIcon class="codepen-icon" height="32" width="32"/>

    </a>
    <!-- LinkedIn Link -->
    <a href="https://www.linkedin.com/in/marcell-lanczos-32b2191a5/" title="LinkedIn" target="_blank" class="mx-2">
      <LinkedInIcon class="linkedin-icon"/>
    </a>
  </div>
</template>


<script>
import LinkedInIcon from '~/assets/Linkedin_icon.svg'
import GitHubIcon from '~/assets/GitHub-dark.svg'
import CodePenIcon from '~/assets/codepen.svg'

export default {
  components : {
    LinkedInIcon,
    GitHubIcon,
    CodePenIcon
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
  .links a {
    color: initial;
  }
  .dark-mode .mail-icon,
  .dark-mode .linkedin-icon,
  .dark-mode .codepen-icon {
    fill:#fff;
  }
  .dark-mode .github-icon path {
    fill:#fff;
  }
</style>