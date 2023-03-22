<template>
  <v-row class="pa-4">
    <v-col cols="4" v-for="user in userData" :key="user.id">
      <UserCard :id="user.id" :status="user.is_active" :name="user.name"/>
    </v-col>
  </v-row>
</template>

<script>
import user from "@/services/http/user";
import UserCard from "./components/UserCard.vue";
export default {

  components:{
    UserCard
  },

  data(){
    return{
      userData: []
    }
  },

  methods:{
    async fetchUsers(){
      let { data } = await user().show();
      this.userData = data
    }
  },

  mounted(){
    this.fetchUsers()
  }
}
</script>

