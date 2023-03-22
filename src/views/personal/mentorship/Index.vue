<template>
  <v-row class="pa-5">
    <v-col cols="12" v-for="mentorship in mentorshipData" :key="mentorship.id">
      <MentorshipCard :mentorship="mentorship" />
    </v-col>
  </v-row>
</template>

<script>
import mentorship from "@/services/http/mentorship"
import video from "@/services/http/video"
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
    async fetchVideo(){
      let { data } = await video().show()
      console.log('video', data)
      this.mentorshipGroupWeek(data)
    },

    mentorshipGroupWeek(data){

      const groupedData = {}

      data.forEach(item => {
      if (!groupedData[item.mentorship_id]) {
        groupedData[item.mentorship_id] = {};
      }

      if (!groupedData[item.mentorship_id][item.n_week]) {
        groupedData[item.mentorship_id][item.n_week] = [];
      }

      groupedData[item.mentorship_id][item.n_week].push(item);
    });

    console.log(groupedData);
    }
  },

  created(){
    this.fetchMentorship()
    this.fetchVideo()
  }
}
</script>

<style>

</style>