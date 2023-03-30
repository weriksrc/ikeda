<template>
  <v-list class="pa-0">
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(treino, i) in treinos"
        :key="i"
      >
        <v-list-item-content>
            <v-list-item-title @click="mentorshipPage(treino.link)">{{ treino.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props:{
    treinos:{
      type: Array
    }
  },

  data(){
    return{
      selectedItem:''
    }
  },

  methods:{
    mentorshipPage(link){
      this.$router.push(`/lessons/${link}`)
    },
  }
}
</script>

<style scoped>
.v-application .primary--text {
    color: #FFD103 !important;
    caret-color: #FFD103 !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #fff;
}

.theme--light.v-list {
  background: #101010;
  color: rgba(0, 0, 0, 0.87);
}
</style>