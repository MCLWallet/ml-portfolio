<template>
  <div class="layout">
    <header class="header">
      <strong>
        <button v-on:click="switchDarkMode()">
          Dark Mode
        </button>
      </strong>
    </header>
    <slot/>
  </div>
</template>

<script>
export default {
  data: {
    darkmode: false
  },
  methods: {
    switchDarkMode() {
      this.darkmode = !this.darkmode
      if (!this.darkmode) {
        document.body.classList.add("dark-mode")
      }
      else {
        document.body.classList.remove("dark-mode")
      }
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #fffffe;
}
.dark-mode {
  background-color: #001534;
} 

.dark-mode,
.dark-mode .logo  {
  color: #fffffe;
}


.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
