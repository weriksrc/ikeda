<template>
  <v-row class="pa-5">
    <v-col cols="12" v-for="mentorship in mentorshipData" :key="mentorship.id">
      <MentorshipCard :mentorship="mentorship" />
    </v-col>
  </v-row>
</template>

<script>
import mentorship from "@/services/http/mentorship"
import user from "@/services/http/user";
import MentorshipCard from './components/MentorshipCard.vue'
export default {

  components:{
    MentorshipCard
  },

  data(){
    return{
      mentorshipData: [],
      userLogged: []
    }
  },

  methods:{
    async fetchMe(){
      let { data } = await user().me().show();
      this.userLogged = data
    },

    async fetchMentorship(){
      let { data } = await mentorship().show()
      this.filterMentorship(data)
    },

    filterMentorship(mentorships){
      let idsMentorships = this.userLogged.levels.map(item => item.level_id)
      this.mentorshipData = mentorships.filter(item => idsMentorships.includes(item.id))
    }

  },

  created(){
    this.fetchMe()
  },

  mounted(){
    this.fetchMentorship()
  }
}
</script>

<style>

</style>