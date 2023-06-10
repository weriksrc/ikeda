<template>
  <div>
    <BaseChart :chartOptions="lineChartOptions"></BaseChart>
  </div>
</template>

<script>
import BaseChart from "@/components/BaseChart.vue";

export default {

  props:{
    dataCircumferences:{
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
          type: "line",
        },
        title: {
          text: "Circunferência das Panturrilhas",
        },
        yAxis: {
          title: {
            text: "Valres em Centímetros",
          },
        },
        lang: {
          noData: "Não há dados"
        },
        series: [
          {
            data: [1, 3, 2, 4, 5, 3, 2],
          },
        ],
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