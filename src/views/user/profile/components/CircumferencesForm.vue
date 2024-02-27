<template>
  <v-form ref="formCreateCircumference">
    <v-row class="pt-5">
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.right_arm"
          type="number"
          label="Braço Direito"
          placeholder="Braço Direito (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.left_arm"
          type="number"
          label="Braço Esquerdo"
          placeholder="Braço Esquerdo (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.right_forearm"
          type="number"
          label="Antebraço Direito"
          placeholder="Antebraço Direito (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.left_forearm"
          type="number"
          label="Antebraço Esquerdo"
          placeholder="Antebraço Esquerdo (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.hip"
          type="number"
          label="Quadril"
          placeholder="Quadril (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.waist"
          type="number"
          label="Cintura"
          placeholder="Cintura (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.right_thigh"
          type="number"
          label="Coxa Direita"
          placeholder="Coxa Direita (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.left_thigh"
          type="number"
          label="Coxa Esquerda"
          placeholder="Coxa Esquerda (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.right_calf"
          type="number"
          label="Panturrilha Direita"
          placeholder="Panturrilha Direita (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.left_calf"
          type="number"
          label="Panturrilha Esquerda"
          placeholder="Panturrilha Esquerda (cm)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#000"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn depressed color="#ffd103" @click="createCircumferences()">
          Salvar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import user from "@/services/http/user";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {},
      dados: [],
    };
  },

  computed: {
    ...mapGetters({
      currentUser: "getUser",
    }),
  },

  methods: {
    async createCircumferences() {
      const validadeForm = this.$refs.formCreateCircumference.validate();
      if (validadeForm) {
        await user(this.currentUser.id)
          .circumferences()
          .store(this.form, {
            notification: true,
            message: { success: "Enviado com sucesso" },
          });
      }
    },
    async getCircumferences() {
      this.dados = await user(this.currentUser.id).circumferences().show();
      console.log("circumferences", this.dados);
    },
  },

  mounted() {
    this.getCircumferences();
  },
};
</script>

<style></style>
