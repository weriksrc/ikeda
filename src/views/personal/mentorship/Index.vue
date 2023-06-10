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
      // this.fetchMentorshipWeek(data[0].id)
    },

    // async fetchMentorshipWeek(id){
    //   console.log("id", id);
    //   console.log("mentorship week inicio");
    //   let { data } = await mentorship(id).week().show()
    //   this.fetchMentorshipWeekVideo(id, data[0].id)
    // },
    // async fetchMentorshipWeekVideo(id, id_week){
    //   let { data } = await mentorship().video({id, id_week})
    //   // 15436441
    //   console.log("fetchMentorshipWeekVideo", data);
    // },
  },

  created(){
    this.fetchMentorship()
  }
}
</script>

<style>

</style>