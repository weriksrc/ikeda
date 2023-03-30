<template>
  <v-row class="pa-5">
    <v-col cols="12" v-for="mentorship in mentorshipData" :key="mentorship.id">
      <MentorshipCard :mentorship="mentorship" />
    </v-col>
  </v-row>
</template>

<script>
import mentorship from "@/services/http/mentorship"
import MentorshipCard from './components/MentorshipCard.vue'
export default {

  components:{
    MentorshipCard
  },

  data(){
    return{
      mentorshipData:[]
    }
  },

  methods:{
    async fetchMentorship(){
      let { data } = await mentorship().show()
      this.mentorshipData = data
    },
  },

  created(){
    this.fetchMentorship()
  }
}
</script>

<style>

</style>