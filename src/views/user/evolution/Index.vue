<template>
  <v-container class="container-charts">
    <BodyCompositionPieChart class="mt-4" :dataBodyComposition="dataBodyComposition" />
    <SkinFoldsChart class="mt-4" :dataSkinFolds="dataSkinFolds" />
    <CicumferenceArmChart class="mt-4" :dataCircumferences="dataCircumferences" />
    <CicumferenceForearmChart class="mt-4" :dataCircumferences="dataCircumferences" />
    <CicumferenceThighChart class="mt-4" :dataCircumferences="dataCircumferences" />
    <CicumferenceCalfChart class="mt-4" :dataCircumferences="dataCircumferences" />
    <CircunferenceMiddleChart class="mt-4" :dataCircumferences="dataCircumferences" />
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

  props:{
    propIdUser:{
      type: Number
    }
  },

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

  // watch:{
  //   propIdUser(value){
  //     console.log("value", value);
  //     this.idUser = value;
  //     this.init()
  //   }
  // },

  methods:{
    async init(){
      

      await this.getBodyComposition();
      await this.getSkinFolds();
      await this.getCircumferences()
    },

    async getUserMe() {
      if (this.propIdUser) {
        this.idUser = this.propIdUser
      }else{
        let {data} = await user().me().show();
        this.idUser = data.id
      }
    },

    async getBodyComposition() {
      let {data} = await user(this.idUser).bodyComposition().show();
      this.dataBodyComposition = data
      // console.log("bodyComposition", this.dataBodyComposition);
    },

    async getSkinFolds() {
      let {data} = await user(this.idUser).skinFolds().show();
      this.dataSkinFolds = data
      // console.log("skinFolds", this.dataSkinFolds);
    },

    async getCircumferences() {
      let {data} = await user(this.idUser).circumferences().show();
      this.dataCircumferences = data
      // console.log("circumferences", this.dataCircumferences);

    },
  },

  async mounted(){
    await this.getUserMe();
    this.init();
  }
  
}
</script>

<style>
.container-charts{
  background-color: #303030;
}
</style>