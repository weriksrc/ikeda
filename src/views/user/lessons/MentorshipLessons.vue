<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(mentorshipGroupWeek, index) in mentorshipGroupDataWeek"
      :key="index"
    >
      <v-expansion-panel-header>
        Semana {{ index + 1 }}
      </v-expansion-panel-header>
      <v-expansion-panel-content color="#101010" class="pa-0">
        <ListVideo :treinos="mentorshipGroupWeek" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import video from "@/services/http/video"
import ListVideo from './components/ListVideo.vue'

export default {

  components:{
    ListVideo
  },

  data(){
    return{
      mentorshipId: '',
      mentorshipGroupDataWeek: []
    }
  },

  methods:{
    async fetchVideo(){
      let { data } = await video().show()
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

    Object.values(groupedData[this.mentorshipId]).map(item =>{
      this.mentorshipGroupDataWeek.push(item)
    })
    
    },

    contWeek(data){
      return Object.keys(data).length;
    },

    contWeekData(data){

    }
  },

  created(){
    this.mentorshipId = this.$router.history.current.params.mentorshipId
    this.fetchVideo()
  }
}
</script>

<style>
.v-expansion-panel-header{
  color: #FFD103 !important;
  font-size: 1rem;
  background-color: #232323 !important;
}
.v-expansion-panel > .v-expansion-panel-header > .v-expansion-panel-header__icon > .v-icon{
  color: #FFD103 !important;
}
.v-expansion-panel-content__wrap{
  padding: 0px;
}
.v-expansion-panel--active:not(:first-child), .v-expansion-panel--active + .v-expansion-panel {
    margin-top: 0px;
}

</style>