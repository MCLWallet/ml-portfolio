<template>
  <b-row>
    <b-col cols="12" align-v="center">
      <b-icon :icon="icon" style="width: 32px; height: 32px;"></b-icon>
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