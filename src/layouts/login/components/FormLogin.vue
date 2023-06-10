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
import token from "@/services/http/token";
export default {

  data() {
    return {
      formLogin: {},
    };
  },
  methods: {
    async login() {
      let { data }  = await token().accessToken().store(this.formLogin, {
        notification: true,
        message: {
          success: "Lançando treinos...",
          error: "Credenciais inválidas",
        },
      });
      console.log("response", data);
      this.$store.dispatch("auth", data.access_token);
      // this.$store.dispatch("userData", data?.user)
      this.$router.push("/evolution");
    },
  },
}
</script>

<style>

</style>