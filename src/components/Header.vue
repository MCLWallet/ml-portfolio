<template>
  <header class="header">
    <div class="header-child left-side">
      <button class="dark-mode-button" v-on:click="switchDarkMode()"  title="Dark Mode">
        <b-icon :icon="darkmode ? 'brightness-high' : 'moon'" style="width: 32px; height: 32px;"></b-icon>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      darkmode: false,
      gitHubHovered: false
    }
  },
  methods: {
    switchDarkMode() {
      this.darkmode = !this.darkmode
      this.$emit('switchDarkMode', this.darkmode)
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
  }
  .dark-mode-button:focus {
    outline: none;
  }
</style>