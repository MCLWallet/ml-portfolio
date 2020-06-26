<template>
  <header class="header">
    <div class="header-child left-side">
      <button class="dark-mode-button" v-on:click="switchDarkMode()">
        <b-icon :icon="darkmode ? 'brightness-high' : 'moon'" style="width: 32px; height: 32px;"></b-icon>
      </button>
    </div>
    <div class="header-child middle-side">

    </div>
    <div class="header-child right-side">
      <a href="https://github.com/MCLWallet">
        <g-image v-if="!darkmode" src="~/assets/GitHub-dark.png"></g-image>
        <g-image v-else src="~/assets/GitHub-light.png"></g-image>
      </a>
      <a href="https://www.linkedin.com/in/marcell-lanczos-32b2191a5/">
        <LinkedInIcon class="linkedin-icon"/>
      </a>
    </div>
    
  </header>
</template>

<script>
import LinkedInIcon from '~/assets/Linkedin_icon.svg'
export default {
  components : {
    LinkedInIcon
  },
  data() {
    return {
      darkmode: false,
    }
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
}
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
  }
  .header-child a{
    margin-left: 1em;
  }
  .linkedin-icon {
    width: 32px;
    height: 32px;
  }
  .dark-mode .linkedin-icon {
    fill:#fff;
  }
  .dark-mode-button {
    background-color: transparent;
    border: none;
  }
  .dark-mode-button:focus {
    outline: none;
  }
</style>