<template>
  <b-row class="mb-4">
    <b-col cols="12" class="mt-2">
      <div class="line without-line">
        <div v-for="skill in array" :key="skill.node.key" class="skill mr-3">
          {{skill.node.skill}}
        </div>
      </div>
      </b-col>
    
  </b-row>
</template>

<script>
export default {
  props: {
    array: Array
  }
}
</script>

<style>
  .skill {
    font-family: 'Lato', sans-serif;
    display: inline-block;
  }
  .line.without-line {
    border-color: transparent;
  }
</style>
