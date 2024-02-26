<template>
  <form>
    <v-row>
      <v-col cols="12" class="pt-0 pb-0">
        <v-text-field
          v-model="formLogin.username"
          label="Email"
          placeholder="Email"
          filled
          rounded
          dense
          color="#777777"
          background-color="#232323"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0 pb-0">
        <v-text-field
          v-model="formLogin.password"
          label="Senha"
          placeholder="Senha"
          :type="viewPassword ? 'text' : 'password'"
          filled
          rounded
          dense
          color="#777777"
          background-color="#232323"
          :append-icon="
            viewPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
          "
          @click:append="toggleTypeInput()"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn width="100%" color="#EEEEEE" depressed rounded @click="login()">
          Entrar
        </v-btn>
      </v-col>
      <v-col cols="12" class="pt-0 pb-0">
        <v-btn width="100%" color="#EEEEEE" outlined rounded>
          Esqueci a senha
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import token from "@/services/http/token";
import user from "@/services/http/user";
export default {
  data() {
    return {
      formLogin: {},
      currentUser: "",
      viewPassword: false,
    };
  },
  methods: {
    async login() {
      let { data } = await token()
        .accessToken()
        .store(this.formLogin, {
          notification: true,
          message: {
            success: "Lançando treinos...",
            error: "Credenciais inválidas",
          },
        });
      this.$store.dispatch("auth", data.access_token);
      this.fetchCurrentUser();
    },

    async fetchCurrentUser() {
      let { data } = await user().me().show();
      this.$store.dispatch("userData", data);
      data.is_admin
        ? this.$router.push("/dashboard")
        : this.$router.push("/evolution");
    },

    toggleTypeInput() {
      this.viewPassword = !this.viewPassword;
    },
  },
};
</script>

<style>
.v-text-field__slot .v-label {
  color: #ffffff !important;
}
.v-text-field__slot input {
  color: #777777 !important;
}
</style>
