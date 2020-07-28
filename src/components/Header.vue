<template>
  <header class="header">
    <div class="header-child left-side">
      <!-- Dark Mode Button -->
      <button class="dark-mode-button" v-on:click="switchDarkMode()"  title="Dark Mode">
        <b-icon :icon="darkmode ? 'brightness-high' : 'moon'" style="width: 32px; height: 32px;"></b-icon>
      </button>
    </div>
    <div class="header-child right-side">
      <!-- Language Switch -->
      <b-button-group class="mr-3 language-switcher">
        <b-button 
          v-on:click="handleLanguageSwitch('Deutsch')"
          :variant="darkmode ? 'outline-light' : 'outline-dark'"
          :class="currentLanguage == 'Deutsch' ? 'active' : ''"
          :title="currentLanguage == 'Deutsch' ? 'German' : 'Deutsch'">
          DE
        </b-button>
        <b-button 
          v-on:click="handleLanguageSwitch('Englisch')"
          :variant="darkmode ? 'outline-light' : 'outline-dark'"
          :class="currentLanguage == 'Englisch' ? 'active' : ''"
          :title="currentLanguage == 'Deutsch' ? 'English' : 'Englisch'">
          EN
        </b-button>
      </b-button-group>
      <!-- Print Button -->
      <button class="dark-mode-button" v-on:click="print()"  :title="currentLanguage == 'Deutsch' ? 'Drucken' : 'Print'">
        <PrintIcon class="print-icon" style="width: 40px; height: 40px;"/>
      </button>
      
    </div>
  </header>
</template>

<script>
import PrintIcon from '~/assets/print.svg'

export default {
  components: {
    PrintIcon
  },
  data() {
    return {
      darkmode: false,
      gitHubHovered: false,
      currentLanguage: 'Deutsch'
    }
  },
  methods: {
    switchDarkMode() {
      this.darkmode = !this.darkmode
      this.$emit('switchDarkMode', this.darkmode)
    },
    handleLanguageSwitch(lang) {
      this.currentLanguage = lang
      this.$emit('handleLanguageSwitch', lang)
    },
    print() {
      window.print()
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
  .header-child a img{
    transition: .2s ease-in-out;
  }
  .header-child a span {
    transition: .2s ease-in;
  }
  .dark-mode-button {
    background-color: transparent;
    border: none;
    transition: 0.8s;
    transition-timing-function: ease-out;
  }
  .dark-mode-button:hover,
  .dark-mode-button:focus {
    transform: scale(1.3);
  }
  .dark-mode-button:focus {
    outline: none;
  }
  .dark-mode .print-icon path {
    fill: #fffffe;
  }
  @media print {
    .dark-mode-button svg,
    .language-switcher {
      opacity: 0;
    }
  }
</style>