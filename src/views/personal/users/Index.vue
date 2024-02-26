<template>
  <v-container>
    <v-text-field
      class="px-4 py-0 searsh-user"
      regular
      label="Aluno"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-row class="px-4 pb-4 pt-0">
      <v-col cols="4" v-for="user in userData" :key="user.id">
        <UserCard :user="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import user from "@/services/http/user";
import UserCard from "./components/UserCard.vue";
export default {
  components: {
    UserCard,
  },

  data() {
    return {
      userData: [],
    };
  },

  methods: {
    async fetchUsers() {
      let { data } = await user().show();
      this.userData = data;
    },
  },

  mounted() {
    this.fetchUsers();
  },
};
</script>

<style></style>
