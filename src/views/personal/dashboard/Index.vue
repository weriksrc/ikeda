<template>
  <v-container class="container-charts">
    <Students class="mt-4" :title="'Alunos'" :subtitle="42" />
    <GenderPieChart class="mt-4" />
  </v-container>
</template>

<script>
import Students from "@/components/BaseInformationCard.vue";
import GenderPieChart from "./components/GenderPieChart.vue";
export default {
  components: {
    Students,
    GenderPieChart,
  },
};
</script>

<style>
.container-charts {
  background-color: #303030;
}
</style>
