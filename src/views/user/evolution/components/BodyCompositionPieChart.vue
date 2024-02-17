<template>
  <v-card color="#232323">
    <BaseChart :chartOptions="lineChartOptions"></BaseChart>
  </v-card>
</template>

<script>
import BaseChart from "@/components/BaseChart.vue";

export default {
  props: {
    dataBodyComposition: {
      type: Array,
    },
  },

  components: {
    BaseChart,
  },
  data() {
    return {
      lineChartOptions: {
        chart: {
          height: 350,
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: "#232323",
        },
        title: {
          text: "Composição Corporal",
          style: {
            color: "rgba(255,255,255, 0.3)",
          },
        },
        legend: {
          itemStyle: {
            color: "rgba(255,255,255, 0.3)",
          },
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
            startAngle: 0,
            endAngle: 360,
            size: "100%",
          },
        },
        series: [],
        legend: {
          itemStyle: {
            color: "rgba(255,255,255, 0.3)",
          },
        },
        lang: {
          noData: "Não há dados",
        },
      },
    };
  },

  watch: {
    dataBodyComposition(value) {
      this.getValuesChart(value);
    },
  },

  methods: {
    getValuesChart(data) {
      const arrayData = [
        { name: "Gordura", y: data[2].body_fat_percentage },
        { name: "Massa Magra", y: data[2].lean_body_mass },
        { name: "Massa Gorda", y: data[2].fat_mass },
        { name: "Massa Muscular", y: data[2].muscle_mass },
        { name: "Massa Óssea", y: data[2].bone_mass },
        { name: "Massa Residual", y: data[2].residual_mass },
      ];

      this.lineChartOptions.series = {
        type: "pie",
        name: "Percentual",
        colorByPoint: true,
        innerSize: "60%",
        data: arrayData,
      };
    },
  },
};
</script>
