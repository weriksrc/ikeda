<template>
  <v-row class="pt-5">
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="form.triceps"
        label="Tríceps"
        placeholder="Tríceps"
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
        label="Subescapular"
        placeholder="Subescapular"
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
        label="Suprailiaca"
        placeholder="Suprailiaca"
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
        label="Abdômen"
        placeholder="Abdômen"
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
      >
        Salvar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data(){
    return{
      form:{}
    }
  },

  methods:{

  }
}
</script>

<style>

</style>