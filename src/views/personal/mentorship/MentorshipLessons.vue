<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="mentorshipWeek in mentorshipDataWeek"
      :key="mentorshipWeek.id"
    >
      <v-expansion-panel-header>
        {{ mentorshipWeek.name }}
      </v-expansion-panel-header>
      <v-expansion-panel-content color="#101010" class="pa-0">
        <ListVideo :id="mentorshipId" :idWeek="mentorshipWeek.id" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import mentorship from "@/services/http/mentorship";
import ListVideo from "./components/ListVideo.vue";

export default {
  components: {
    ListVideo,
  },

  data() {
    return {
      mentorshipId: "",
      // mentorshipGroupDataWeek: [],
      mentorshipDataWeek: [],
    };
  },

  methods: {
    async fetchMentorshipWeek(id) {
      let { data } = await mentorship(id).week().show();
      this.mentorshipDataWeek = data.reverse();
    },
  },

  mounted() {
    this.mentorshipId = this.$router.history.current.params.mentorshipId;
    this.fetchMentorshipWeek(this.mentorshipId);
  },
};
</script>

<style>
.v-expansion-panel-header {
  color: #ffd103 !important;
  font-size: 1rem;
  background-color: #232323 !important;
}
.v-expansion-panel
  > .v-expansion-panel-header
  > .v-expansion-panel-header__icon
  > .v-icon {
  color: #ffd103 !important;
}
.v-expansion-panel-content__wrap {
  padding: 0px;
}
.v-expansion-panel--active:not(:first-child),
.v-expansion-panel--active + .v-expansion-panel {
  margin-top: 0px;
}
</style>
