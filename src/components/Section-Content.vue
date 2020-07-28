<template>
  <b-row class="section-content" align-v="center" :style="animationDelay">
    <b-col cols="12">
      <b-icon icon="dot" style="width: 32px; height: 32px;"></b-icon>
      <h2 v-if="!isProject">
        {{ anfang ? convertedAnfang + ' - ' + (ende ? convertedEnde : getToday()) : convertedEnde }}
      </h2>
      <h2 v-else>
        {{ anfang ? convertedAnfangYear + ' - ' + convertedEndeYear : convertedEndeYear }}
      </h2>
    </b-col>
    <b-col cols="12">
      <div class="line">
        <h3> {{ title }} </h3>
        <h4 v-if="!isProject"> 
          {{ firm + ', ' + location }} 
        </h4>
        <h4 v-else> 
          <strong>{{ currentLanguage == 'Deutsch' ? 'Kunde: ' : 'Client: ' }}</strong>
          {{ firm }} 
        </h4>
        
        <vue-markdown v-if="details" class="details mt-2" :anchorAttributes="{target: '_blank'}">
          {{details}}
        </vue-markdown>
      </div>
    </b-col>
  </b-row>
</template>


<script>
import VueMarkdown from 'vue-markdown'
import moment from 'moment'

export default {
  components: {
    VueMarkdown,
    moment
  },
  props: {
    title: String,
    firm: String,
    location: String, 
    details: String,
    anfang: String,
    ende: String,
    delay: {
      type: Number,
      default: 0
    },
    isProject: {
      type: Boolean,
      default: false
    },
    currentLanguage: String
  },
  computed: {
    convertedAnfang() {
      this.checkCurrentLanguage()
      let newAnfang = moment(this.anfang, "YYYY-MM-DD").format("MMMM YYYY")
      return newAnfang
    },
    convertedEnde() {
      this.checkCurrentLanguage()
      let newEnde = moment(this.ende, "YYYY-MM-DD").format("MMMM YYYY")
      return newEnde
    },
    convertedAnfangYear() {
      this.checkCurrentLanguage()
      let newYear = moment(this.anfang, "YYYY-MM-DD").format("YYYY")
      return newYear
    },
    convertedEndeYear() {
      this.checkCurrentLanguage()
      let newYear = moment(this.ende, "YYYY-MM-DD").format("YYYY")
      return newYear
    },
    animationDelay() {
      return 'animation-delay: ' + this.delay + 's;'
    }
  },
  methods: {
    checkCurrentLanguage() {
      if (this.currentLanguage == 'Deutsch') {
        moment.locale('de')
      }
      else {
        moment.locale('en')
      }
    },
    getToday() {
      if (this.currentLanguage == 'Deutsch') {
        return 'Heute'
      }
      else {
        return 'Today'
      }
    }
  }
}
</script>

<style>
  .line {
    border-left: 2px solid;
    border-color: #001534;
    margin-left: 15px;
    padding-left: 2.1em;
    transition: .2s ease-in;
  }
  .section-content a{
    text-decoration: underline;
  } 
  .dark-mode .section-content a{
    color: #fde24f;
  } 
  /* .dark-mode h2, */
  .dark-mode h3,
  .dark-mode li {
    color: #fffffe;
  }
  .dark-mode h4 {
    color: #fffffe;
  }
  .dark-mode .line {
    border-color: #fffffe;
  }
  .dark-mode .section-content a:hover{
    color: #e9cd36;
  } 
  @media print {
    .section-content a,
    .dark-mode .section-content a{
      color: #007bff;
    } 
    /* .dark-mode h2, */
    .dark-mode h3,
    .dark-mode h4,
    .dark-mode li,
    .dark-mode .line {
      color: #001534 !important;
      border-color: #001534 !important;
    }
  }
</style>