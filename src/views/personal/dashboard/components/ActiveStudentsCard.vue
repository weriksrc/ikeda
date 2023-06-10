<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props:{
    title:{
      type: String
    },
    subtitle:{
      type: String
    }
  },

  data(){
    return{}
  }
}
</script>

<style>

</style>