<template>
  <v-list class="pa-0">
    <v-progress-linear
      v-if="loading"
      color="#ffd103"
      indeterminate
      rounded
      height="3"
    ></v-progress-linear>
    <v-list-item-group v-model="selectedItem" color="primary">
      <v-list-item v-for="(treino, i) in treinos" :key="i">
        <v-list-item-content>
          <v-list-item-title @click="mentorshipPage(treino.link)">
            {{ treino.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import mentorship from "@/services/http/mentorship";
export default {
  props: ["id", "idWeek"],

  data() {
    return {
      selectedItem: "",
      treinos: [],
      loading: false,
    };
  },

  methods: {
    formatName(value) {
      let name = value.split(" ")[0].replaceAll("_", " ");
      name = `${name.charAt(0).toUpperCase() + name.slice(1)}`;
      return name;
    },

    async mentorshipWeekVideo() {
      this.loading = true;
      const dataRequest = {
        id: this.id,
        idWeek: this.idWeek,
      };
      let { data } = await mentorship().video(dataRequest);
      this.treinos = data;
      this.loading = false;
    },

    mentorshipPage(link) {
      const formatLink = link.match(/\d+/g).join("");
      this.$router.push(`/mentorship/${formatLink}`);
    },
  },

  mounted() {
    this.mentorshipWeekVideo();
  },
};
</script>

<style scoped>
.v-application .primary--text {
  color: #ffd103 !important;
  caret-color: #ffd103 !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(
    .v-list-item--disabled
  ) {
  color: #fff;
}

.theme--light.v-list {
  background: #101010;
  color: rgba(0, 0, 0, 0.87);
}
</style>
