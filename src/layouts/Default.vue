<template>
  <div class="layout">
    <Header @switchDarkMode="switchDarkMode($event)"/>
    <slot :darkmode="darkmode"/>
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
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
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
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #fffffe;
  transition: .3s ease-in;
}
.dark-mode {
  background-color: #001534;
} 

.dark-mode,
.dark-mode .logo,
.dark-mode .dark-mode-button svg g path  {
  color: #fffffe;
}


.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
