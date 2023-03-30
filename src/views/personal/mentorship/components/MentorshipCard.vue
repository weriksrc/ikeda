<template>
  <v-card class="card-image" @click="mentorshipPage(mentorship.name, mentorship.id)"> 
    <v-img src="../../../../assets/img/mentorship-card.png">
    <div class="blocText">
      <v-card-text class="cardText">
      {{ formatText(mentorship.name) }}
    </v-card-text>
    </div>
    </v-img>
  </v-card>
</template>

<script>

export default {
  props:{
    mentorship:{
      type: Object
    }
  },

  methods:{
    mentorshipPage(name, id){
      this.$router.push(`/mentorship/${this.formatRoute(name)}/${id}`)
    },
    formatText(text){
      return text.replace("-", "")
    },
    formatRoute(text){
      let newText = text.toLowerCase()
      return newText.replaceAll(" ", "")
    }
  }
}
</script>

<style>
.card-image{
  border-radius: 10px !important;
}
.blocText{
  position: absolute;
  top: 42px;
  left: 20px;
  width: 44%;
  height: 41%;
  display: flex;
  align-items: center;
}
.cardText{
  padding: 0;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.2rem;
}
</style>