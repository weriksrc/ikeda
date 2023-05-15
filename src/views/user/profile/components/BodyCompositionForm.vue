<template>
  <v-row class="pt-5">
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="age"
        label="Idade"
        placeholder="Idade"
        filled
        rounded
        dense
        color="#777777"
        background-color="#EEEEEE"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="weight"
        label="Peso"
        placeholder="Peso"
        filled
        rounded
        dense
        color="#777777"
        background-color="#EEEEEE"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="height"
        label="Altura"
        placeholder="Altura"
        filled
        rounded
        dense
        color="#777777"
        background-color="#EEEEEE"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="body_fat_percentage"
        label="Percent. Gordura"
        placeholder="Percent. Gordura"
        filled
        rounded
        dense
        color="#777777"
        background-color="#EEEEEE"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="lean_body_mass"
        label="Massa Magra"
        placeholder="Massa Magra"
        filled
        rounded
        dense
        color="#777777"
        background-color="#EEEEEE"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="fat_mass"
        label="Massa Gorda"
        placeholder="Massa Gorda"
        filled
        rounded
        dense
        color="#777777"
        background-color="#EEEEEE"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="muscle_mass"
        label="Massa Muscular"
        placeholder="Massa Muscular"
        filled
        rounded
        dense
        color="#777777"
        background-color="#EEEEEE"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="bone_mass"
        label="Massa Óssea"
        placeholder="Massa Óssea"
        filled
        rounded
        dense
        color="#777777"
        background-color="#EEEEEE"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="py-0">
      <v-text-field
        v-model="residual_mass"
        label="Massa Residual"
        placeholder="Massa Residual"
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

}
</script>

<style>

</style>