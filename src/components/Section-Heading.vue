<template>
  <b-row>
    <b-col cols="1">
      <b-icon :icon="icon" style="width: 32px; height: 32px;"></b-icon>
    </b-col>
    <b-col cols="11">
      <h1>
      {{ title }}
      </h1>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String
  }
}
</script>

<style>
  h2 {
    font-family: 'quenda-medium', sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 200;
  }
</style>