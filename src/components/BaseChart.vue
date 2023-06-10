<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  name: "BaseChart",
  components: {
    highcharts: Chart
  },
  props: {
    chartOptions: {
      type: Object,
    },
  },
};
</script>