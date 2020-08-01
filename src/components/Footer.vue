<template>
  <footer>
    <b-container>
      <b-row align-h="center" align-v="center" class="mt-5 mb-4">
        {{currentLanguage == 'Deutsch' ? germanFooterText1 : englishFooterText1}}
        <a  href="https://airtable.com/shrBNd1bXvShPLcYt/tblVkd8QE4GOMsYXT"
            class="mx-3"
            title="Airtable"
            target="_blank">
            <g-image src="~/assets/airtable.png" width="45"/>
        </a>
        {{currentLanguage == 'Deutsch' ? germanFooterText2 : englishFooterText2}} 
         <a href="https://gridsome.org/"
            class="mx-3"
            title="Gridsome"
            target="_blank">
            <g-image src="~/assets/gridsome.png" width="38"/>
        </a>
        {{currentLanguage == 'Deutsch' ? germanFooterText3 : englishFooterText3}} 
      </b-row>
    </b-container>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      germanFooterText1: "Dieser Lebenslauf wurde mit ",
      germanFooterText2: "und",
      germanFooterText3: "gebaut.",
      englishFooterText1: "This CV was built with ",
      englishFooterText2: "and",
      englishFooterText3: ".",

    }
  },
  props: {
    currentLanguage: {
      type: String,
      default: 'Deutsch'
    }
  }
}
</script>

<style>
  footer .row {
    font-family: 'Lato', sans-serif;
  }
</style>