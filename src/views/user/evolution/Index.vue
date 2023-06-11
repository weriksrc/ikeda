<template>
  <v-container class="container-charts">
    <HeightCard class="mt-4" :title="'Altura'" :subtitle="height" />
    <WeightCard class="mt-4" :title="'Peso'" :subtitle="weight" />
    <IMCCard class="mt-4" :title="'IMC'" :subtitle="imc" />
    <BodyCompositionPieChart class="mt-4" :dataBodyComposition="dataBodyComposition" />
    <SkinFoldsChart class="mt-4" :dataSkinFolds="dataSkinFolds" />
    <CircumferenceArmChart class="mt-4" :dataCircumferences="dataCircumferences" />
    <CircumferenceForearmChart class="mt-4" :dataCircumferences="dataCircumferences" />
    <CircumferenceThighChart class="mt-4" :dataCircumferences="dataCircumferences" />
    <CircumferenceCalfChart class="mt-4" :dataCircumferences="dataCircumferences" />
    <CircunferenceMiddleChart class="mt-4" :dataCircumferences="dataCircumferences" />
  </v-container>
</template>

<script>
import HeightCard from "@/components/BaseInformationCard.vue";
import WeightCard from "@/components/BaseInformationCard.vue";
import IMCCard from "@/components/BaseInformationCard.vue";
import BodyCompositionPieChart from "@/views/user/evolution/components/BodyCompositionPieChart.vue";
import SkinFoldsChart from "@/views/user/evolution/components/SkinFoldsChart.vue";
import CircumferenceArmChart from "@/views/user/evolution/components/CircumferenceArmChart.vue";
import CircumferenceForearmChart from "@/views/user/evolution/components/CircumferenceForearmChart.vue";
import CircumferenceThighChart from "@/views/user/evolution/components/CircumferenceThighChart.vue";
import CircumferenceCalfChart from "@/views/user/evolution/components/CircumferenceCalfChart.vue";
import CircunferenceMiddleChart from "@/views/user/evolution/components/CircunferenceMiddleChart.vue";
import user from "@/services/http/user";
export default {

  props:{
    propIdUser:{
      type: Number
    }
  },

  components:{
    HeightCard,
    WeightCard,
    IMCCard,
    BodyCompositionPieChart,
    SkinFoldsChart,
    CircumferenceArmChart,
    CircumferenceForearmChart,
    CircumferenceThighChart,
    CircumferenceCalfChart,
    CircunferenceMiddleChart,
  },

  data(){
    return{
      dataBodyComposition:[],
      dataSkinFolds:[],
      dataCircumferences:[],
      height:'',
      weight:'',
      imc:'',
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
      this.infomation(this.dataBodyComposition)
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

    infomation(data){
      this.height = data[2].height;
      this.weight = data[2].weight
      this.imc = (this.weight/(this.height^2)).toFixed(1)
    }
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