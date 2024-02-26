<template>
  <v-row class="background-profile">
    <v-col cols="12" class="mt-4 px-3 py-0">
      <v-card-title class="subtitle-1 grey--text py-0 pay-card" color="#ffffff"
        >Pagamento</v-card-title
      >
    </v-col>
    <v-col cols="6" class="pt-0">
      <v-card
        color="#232323"
        height="130"
        class="mx-3 mt-4 px-3"
        @click="displayOpenPixModal()"
      >
        <div class="d-flex flex-column align-center pt-4">
          <v-img src="@/assets/img/pix.svg" width="60"></v-img>
          <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff"
            >Pix</v-card-title
          >
        </div>
      </v-card>
    </v-col>
    <v-col cols="6" class="pt-0">
      <v-card color="#232323" height="130" class="mx-3 mt-4 px-3">
        <div class="d-flex flex-column align-center pt-6">
          <v-img src="@/assets/img/cartao.svg" width="70"></v-img>
          <v-card-title
            class="subtitle-1 grey--text pb-0 pay-card"
            color="#ffffff"
            >Cartão</v-card-title
          >
        </div>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-3 my-4 px-3 form-card">
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff"
          >Conta</v-card-title
        >
        <IdentificationForm />
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff"
          >Senha</v-card-title
        >
        <PasswordForm />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-3 my-4 px-3 form-card">
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff"
          >Composição Corporal</v-card-title
        >
        <BodyCompositionForm />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-3 my-4 px-3 form-card">
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff"
          >Dobras Cutaneas (mm)</v-card-title
        >
        <DobrasCutaneas />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-3 my-4 px-3 form-card">
        <v-card-title class="subtitle-1 grey--text pb-0" color="#ffffff"
          >Circunferência (cm)</v-card-title
        >
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
import { mapGetters } from "vuex";

export default {
  components: {
    IdentificationForm,
    PasswordForm,
    BodyCompositionForm,
    DobrasCutaneas,
    CircumferencesForm,
  },

  computed: {
    ...mapGetters({
      currentUser: "getUser",
    }),
  },

  watch: {
    currentUser(newVal, oldVal) {
      console.log("getUser - watch", newVal);
      // Execute qualquer lógica dependente dos dados aqui
    },
  },

  methods: {
    displayOpenPixModal() {
      window.$openpix = window.$openpix || [];
      window.$openpix.push([
        "config",
        { appID: process.env.VUE_APP_OPENPIX_API_APP_ID },
      ]);

      window.$openpix.push([
        "pix",
        {
          value: 1000,
          correlationID: this.currentUser.id,
          description: "Mentoria",
        },
      ]);
    },
  },
};
</script>

<style scoped>
.background-profile {
  background-color: #303030;
}

.form-card {
  background-color: #232323;
  border-radius: 10px;
}

.pay-card {
  margin-top: 9px;
}
</style>
