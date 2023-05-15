<template>
  <v-form ref="formCreate">
     <v-row>
        <v-col cols="12" class="pt-0 pb-0">
          <v-text-field
            v-model="formUser.name"
            label="Nome"
            placeholder="Nome"
            :rules="[rules.required]"
            filled
            rounded
            dense
            color="#777777"
            background-color="#232323"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
          <v-text-field
            v-model="formUser.email"
            label="Email"
            placeholder="Email"
            :rules="[rules.required, rules.email]"
            filled
            rounded
            dense
            color="#777777"
            background-color="#232323"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
          <v-text-field
            v-model="formUser.password"
            label="Senha"
            placeholder="Senha"
            :rules="[rules.required, rules.password]"
            type="password"
            filled
            rounded
            dense
            color="#777777"
            background-color="#232323"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
          <v-radio-group
            v-model="formUser.sexo"
          >
            <v-radio
              label="Feminimo"
              color="#ffffff"
              value="F"
            ></v-radio>
            <v-radio
              label="Masculino"
              color="#ffffff"
              value="M"
            >
          </v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <v-btn width="100%" color="#EEEEEE" depressed rounded @click="createUser()">
            Bora lançar o shape
          </v-btn>
        </v-col>
     </v-row>
  </v-form>
</template>

<script>
import user from "@/services/http/user";
export default {

  data(){
    return{
      formUser: {},
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
        email: (v) => /.+@.+/.test(v) || "E-mail não é válido",
        password: (v) => (v && v.length <= 8) || "Min. 8 caracteres",
      },
    }
  },

  methods:{
  async createUser() {
    const validadeForm = this.$refs.formCreate.validate()
      if (validadeForm){
        await user().store(this.formUser, {
          notification: true,
          message: { success: "Pronto! Bem vindo ao #TeamIkeda" },
        });
      }
    },
  }

}
</script>

<style>

.v-input--radio-group--column .v-input--radio-group__input {
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: flex-start !important;
  color: #ffffff;
}

.v-input--selection-controls .v-input__slot > .v-label, .v-input--selection-controls .v-radio > .v-label {
  color: #ffffff
}

.v-input--selection-controls__input .v-icon {
 color: #ffffff; 
}
</style>