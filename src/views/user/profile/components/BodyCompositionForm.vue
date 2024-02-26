<template>
  <v-form ref="formCreateBodyComposition">
    <v-row class="pt-5">
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.age"
          type="number"
          label="Idade"
          placeholder="Idade"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.weight"
          type="number"
          label="Peso"
          placeholder="Peso (Kg)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.height"
          type="number"
          label="Altura"
          placeholder="Altura (M)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.body_fat_percentage"
          type="number"
          label="Percent. Gordura"
          placeholder="Percent. Gordura (%)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.lean_body_mass"
          type="number"
          label="Massa Magra"
          placeholder="Massa Magra (Kg)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.fat_mass"
          type="number"
          label="Massa Gorda"
          placeholder="Massa Gorda (Kg)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.muscle_mass"
          type="number"
          label="Massa Muscular"
          placeholder="Massa Muscular (Kg)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.bone_mass"
          type="number"
          label="Massa Óssea"
          placeholder="Massa Óssea (Kg)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.residual_mass"
          type="number"
          label="Massa Residual"
          placeholder="Massa Residual (Kg)"
          filled
          rounded
          class="rounded-lg"
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn depressed color="#ffd103" @click="createBodyComposition()">
          Salvar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import user from "@/services/http/user";
export default {
  data() {
    return {
      form: {},
      dados: [],
    };
  },

  methods: {
    async createBodyComposition() {
      const validadeForm = this.$refs.formCreateBodyComposition.validate();
      if (validadeForm) {
        await user(1)
          .bodyComposition()
          .store(this.form, {
            notification: true,
            message: { success: "Enviado com sucesso" },
          });
      }
    },

    async getBodyComposition() {
      this.dados = await user(1).bodyComposition().show();
      console.log("bodyComposition", this.dados);
    },
  },

  mounted() {
    this.getBodyComposition();
  },
};
</script>

<style></style>
