<template>
  <form>
     <v-row>
      <v-col cols="12" class="pt-0 pb-0">
        <v-text-field
          v-model="formLogin.email"
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
            type="password"
            filled
            rounded
            dense
            color="#777777"
            background-color="#232323"
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
import auth from "@/services/http/auth";
export default {

  data() {
    return {
      formLogin: {},
    };
  },
  methods: {
    async login() {
      console.log("this.formLogin", this.formLogin);
      let { data } = await auth().store(this.formLogin, {
        notification: true,
        message: {
          success: "Lançando treinos...",
          error: "Credenciais inválidas",
        },
      });
      console.log("data", data);
      this.$store.dispatch("auth", data.token);
      this.$store.dispatch("userData", data.user)
      this.$router.push("/evolution");
    },
  },
}
</script>

<style>

</style>