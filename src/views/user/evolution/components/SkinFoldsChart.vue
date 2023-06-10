<template>
  <v-card>
    <BaseChart :chartOptions="lineChartOptions"></BaseChart>
  </v-card>
</template>

<script>
import BaseChart from "@/components/BaseChart.vue";

export default {

  props:{
    dataSkinFolds:{
      type: Array
    }
  },

  components: {
    BaseChart,
  },
  data() {
    return {
      lineChartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Dobras Cutâneas",
        },
        yAxis: {
          title: {
            text: "Valres em Milímetros",
          },
        },
        lang: {
          noData: "Não há dados"
        },
        series: [],
      },
    };
  },

  watch:{
    dataSkinFolds(value){
      this.getValuesChart(value)
    }
  },

  methods:{
    getValuesChart(data){
      const keys = ["triceps", "subscapular", "suprailiac", "abdomen"];
      const groupedData = {};

      data.forEach(entry => {
        keys.forEach(key => {
          if (entry.hasOwnProperty(key)) {
            if (!groupedData[key]) {
              groupedData[key] = [];
            }
            groupedData[key].push(entry[key]);
          }
        });
      });

      this.lineChartOptions.series = Object.keys(groupedData).map(key => ({
        name: key,
        data: groupedData[key],
      }));
    }
  }
};
</script>