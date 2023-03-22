<template>
  <v-bottom-navigation
    :value="value"
    color="#FFD103"
    class="bottom-navigation"
  >
    <v-btn icon to="/evolution">
      <span>Evolução</span>

      <v-icon>mdi-poll</v-icon>
    </v-btn>

    <v-btn icon to="/lessons">
      <span>Treinos</span>

      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>

    <v-btn icon to="/profile">
      <span>Perfil</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 0 }),
  }
</script>
<style scoped>
.bottom-navigation{
  background-color: #232323;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
}

.theme--light.v-btn.v-btn--has-bg {
  background-color: transparent;
}

.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: #777777 !important;
}
</style>