<template>
  <b-row align-v="center section-content" :style="animationDelay">
    <b-col cols="12">
      <b-icon icon="dot" style="width: 32px; height: 32px;"></b-icon>
      <h2 v-if="!isProject">
        {{ anfang ? convertedAnfang + ' - ' + convertedEnde : convertedEnde }}
      </h2>
      <h2 v-else>
        {{ convertedYear }}
      </h2>
    </b-col>
    <b-col cols="12">
      <div class="line">
        <h3> {{ title }} </h3>
        <h4 v-if="!isProject"> 
          {{ firm + ', ' + location }} 
        </h4>
        <h4 v-else> 
          <strong>Kunde: </strong>
          {{ firm }} 
        </h4>
        
        <vue-markdown v-if="details" class="details">
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
    delay: Number,
    isProject: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    convertedAnfang() {
      let newAnfang = moment(this.anfang, "YYYY-MM-DD").format("MMMM YYYY")
      return newAnfang
    },
    convertedEnde() {
      let newEnde = moment(this.ende, "YYYY-MM-DD").format("MMMM YYYY")
      return newEnde
    },
    convertedYear() {
      let newYear = moment(this.ende, "YYYY-MM-DD").format("YYYY")
      return newYear
    },
    animationDelay() {
      return 'animation-delay: ' + this.delay + 's;'
    }
  },
  beforeCreate() {
    moment.locale('de')
  }

}
</script>

<style>
  .line {
    border-left: 2px solid #000;
    margin-left: 15px;
    padding-left: 2.1em;
    transition: .2s ease-in;
  }
  .section-content {
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .section-content a{
    color: #ff5470;
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
</style>