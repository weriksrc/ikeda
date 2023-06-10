<template>
  <v-container>
    teste evolution
    <BodyCompositionPieChart :dataBodyComposition="dataBodyComposition" />
    <SkinFoldsChart :dataSkinFolds="dataSkinFolds" />
    <CicumferenceArmChart :dataCircumferences="dataCircumferences" />
    <CicumferenceForearmChart :dataCircumferences="dataCircumferences" />
    <CicumferenceThighChart :dataCircumferences="dataCircumferences" />
    <CicumferenceCalfChart :dataCircumferences="dataCircumferences" />
    <CircunferenceMiddleChart :dataCircumferences="dataCircumferences" />
  </v-container>
</template>

<script>
import BodyCompositionPieChart from "@/views/user/evolution/components/BodyCompositionPieChart.vue";
import SkinFoldsChart from "@/views/user/evolution/components/SkinFoldsChart.vue";
import CicumferenceArmChart from "@/views/user/evolution/components/CicumferenceArmChart.vue";
import CicumferenceForearmChart from "@/views/user/evolution/components/CicumferenceForearmChart.vue";
import CicumferenceThighChart from "@/views/user/evolution/components/CicumferenceThighChart.vue";
import CicumferenceCalfChart from "@/views/user/evolution/components/CicumferenceCalfChart.vue";
import CircunferenceMiddleChart from "@/views/user/evolution/components/CircunferenceMiddleChart.vue";
import user from "@/services/http/user";
export default {

  // props:['propIdUser'],

  components:{
    BodyCompositionPieChart,
    SkinFoldsChart,
    CicumferenceArmChart,
    CicumferenceForearmChart,
    CicumferenceThighChart,
    CicumferenceCalfChart,
    CircunferenceMiddleChart,
  },

  data(){
    return{
      dataBodyComposition:[],
      dataSkinFolds:[],
      dataCircumferences:[],
      idUser: '',
    }
  },

  methods:{
    async getUserMe() {
      let {data} = await user().me().show();
      this.idUser = data.id
      console.log("bodyComposition", this.dataBodyComposition);
    },

    async getBodyComposition() {
      let {data} = await user(1).bodyComposition().show();
      this.dataBodyComposition = data
      console.log("bodyComposition", this.dataBodyComposition);
    },

    async getSkinFolds() {
      let {data} = await user(1).skinFolds().show();
      this.dataSkinFolds = data
      console.log("skinFolds", this.dataSkinFolds);
    },

    async getCircumferences() {
      let {data} = await user(1).circumferences().show();
      this.dataCircumferences = data
      console.log("circumferences", this.dataCircumferences);

    },
  },

  mounted(){
    this.getUserMe();
    // if(propIdUser){
    //   this.idUser = this.propIdUser
    // };
    this.getBodyComposition(this.idUser);
    this.getSkinFolds(this.idUser);
    this.getCircumferences(this.idUser)
  }
  
}
</script>

<style>

</style>