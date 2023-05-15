<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-3 my-4 px-3 form-card">
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff">Conta</v-card-title>
        <IdentificationForm />
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff">Senha</v-card-title>
        <PasswordForm />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-3 my-4 px-3 form-card">
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff">Composição Corporal</v-card-title>
        <BodyCompositionForm />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-3 my-4 px-3 form-card">
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff">Dobras Cutaneas (mm)</v-card-title>
        <DobrasCutaneas />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-3 my-4 px-3 form-card">
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff">Circunferência (cm)</v-card-title>
        <CircumferencesForm />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import IdentificationForm from "./components/IdentificationForm";
import PasswordForm from "./components/PasswordForm";
import BodyCompositionForm from "./components/BodyCompositionForm";
import DobrasCutaneas from "./components/DobrasCutaneas";
import CircumferencesForm from "./components/CircumferencesForm";
export default {
  components:{
    IdentificationForm,
    PasswordForm,
    BodyCompositionForm,
    DobrasCutaneas,
    CircumferencesForm
  }

}
</script>

<style scoped>
.form-card{
  background-color: #232323;
  border-radius: 10px;
}
</style>