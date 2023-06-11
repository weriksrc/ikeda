<template>
  <v-card color="#232323" class="d-flex flex-column">
    <v-card-title class="align-self-center card-text">{{ title }}</v-card-title>
    <v-card-subtitle class="display-1 align-self-center card-text">{{ subtitle }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {

  props:['title', 'subtitle'],

  data(){
    return{}
  }
}
</script>

<style>
.card-text{
  color: rgba(255, 255, 255, 0.3) !important;
}
</style>