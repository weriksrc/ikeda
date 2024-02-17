<template>
  <v-card color="#232323">
    <BaseChart :chartOptions="lineChartOptions"></BaseChart>
  </v-card>
</template>

<script>
import BaseChart from "@/components/BaseChart.vue";

export default {
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
          text: "Gênero",
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
          pointFormat:
            "Total: <b>{point.y}</b><br>{series.name}: <b>{point.percentage:.1f}%</b>",
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
        series: [
          {
            type: "pie",
            name: "Percentual",
            colorByPoint: true,
            innerSize: "60%",
            data: [
              { name: "Maculino", y: 15, color: "#FFFFFF" },
              { name: "Feninino", y: 27, color: "#FFD103" },
            ],
          },
        ],
        legend: {
          itemStyle: {
            color: "rgba(255,255,255, 0.3)",
          },
        },
        lang: {
          noData: "Não há dados para serem apresentados",
        },
        noData: {
          style: {
            fontWeight: "normal",
            fontSize: "1rem",
            color: "rgba(0, 0, 0, 0.6)",
          },
        },
      },
    };
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
