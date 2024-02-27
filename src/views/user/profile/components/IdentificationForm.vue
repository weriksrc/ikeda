<template>
  <v-row class="pt-5">
    <v-col cols="12" class="py-0">
      <v-text-field
        label="Nome"
        placeholder="Nome"
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
        label="Sexo"
        placeholder="Sexo"
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
        label="Email"
        placeholder="Email"
        filled
        rounded
        class="rounded-lg"
        dense
        color="#777777"
        background-color="#000"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
.v-text-field__slot label {
  color: #fff !important;
}

.v-text-field__slot input {
  color: #777 !important;
}
</style>
