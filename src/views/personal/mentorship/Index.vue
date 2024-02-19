<template>
  <v-row class="pa-5">
    <LoaderSystem :active="loading" />
    <v-col cols="12" v-for="mentorship in mentorshipData" :key="mentorship.id">
      <MentorshipCard :mentorship="mentorship" />
    </v-col>
  </v-row>
</template>

<script>
import mentorship from "@/services/http/mentorship";
import MentorshipCard from "./components/MentorshipCard.vue";
import LoaderSystem from "@/components/LoaderSystem.vue";
export default {
  components: {
    MentorshipCard,
    LoaderSystem,
  },

  data() {
    return {
      mentorshipData: [],
      loading: false,
    };
  },

  methods: {
    async fetchMentorship() {
      this.loading = true;
      let { data } = await mentorship().show();
      this.mentorshipData = data;
      this.loading = false;
    },
  },

  created() {
    this.fetchMentorship();
  },
};
</script>
