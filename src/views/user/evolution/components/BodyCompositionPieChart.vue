<template>
  <div>
    <BaseChart :chartOptions="lineChartOptions"></BaseChart>
  </div>
</template>

<script>
import BaseChart from "@/components/BaseChart.vue";

export default {

  props:{
    dataBodyComposition:{
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
          text: "Composição Corporal",
        },
        series: [
          {
            data: [1, 3, 2, 4, 5, 3, 2],
          },
        ],
      },
    };
  },
};
</script>