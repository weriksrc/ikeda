<template>
  <v-form ref="formCreateSkinFolds">
    <v-row class="pt-5">
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.triceps"
          type="number"
          label="Tríceps"
          placeholder="Tríceps (mm)"
          filled
          rounded
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.subscapular"
          type="number"
          label="Subescapular"
          placeholder="Subescapular (mm)"
          filled
          rounded
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.suprailiac"
          type="number"
          label="Suprailiaca"
          placeholder="Suprailiaca (mm)"
          filled
          rounded
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="form.abdomen"
          type="number"
          label="Abdômen"
          placeholder="Abdômen (mm)"
          filled
          rounded
          dense
          color="#777777"
          background-color="#EEEEEE"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn
          depressed
          color="#ffd103"
          @click="createSkinFolds()"
        >
          Salvar
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
      form:{}
    }
  },

  methods:{
    async createSkinFolds() {
      const validadeForm = this.$refs.formCreateSkinFolds.validate()
      if (validadeForm){
        await user().skinFolds().store(this.form, {
          notification: true,
          message: { success: "Enviado com sucesso" },
        });
      }
    },
  }
}
</script>

<style>

</style>