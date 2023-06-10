<template>
  <v-container class="pa-0">
    <v-img
      class="backgroud-login"
      src="../../assets/img/background-login.png"
    >
    </v-img>
    <v-container class="body-login">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-img
            max-width="80"
            src="../../assets/img/logo-ikeda.png"
          >
          </v-img>
        </v-col>
        <v-col cols="12">
          <v-img
            max-width="100%"
            src="../../assets/img/team-ikeda.png"
          >
          </v-img>
        </v-col>
        <v-tabs v-model="tab" background-color="transparent" color="#fff">
          <v-tab>Login</v-tab>
          <v-tab>Registrar</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="pl-3 pr-3">
          <v-tab-item>
            <FormLogin class="mt-10 mb-5"/>
          </v-tab-item>
          <v-tab-item>
            <FormRegister class="mt-10 mb-5" @tabValue="tab = 0"/>
          </v-tab-item>
        </v-tabs-items>
        
        
      </v-row>
      
    
    </v-container>
  </v-container>
</template>

<script>
import FormLogin from "./components/FormLogin.vue";
import FormRegister from "./components/FormRegister.vue";
export default {

  components:{
    FormLogin,
    FormRegister
  },

  data() {
    return {
      tab: null
    };
  },

}
</script>

<style scoped>
.backgroud-login{
  height: 100vh;
}
.body-login{
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
}

.v-tab {
  color: #fff !important;
  font-weight: 400;
}

.theme--light.v-tabs-items {
  background-color: transparent !important;
}

</style>