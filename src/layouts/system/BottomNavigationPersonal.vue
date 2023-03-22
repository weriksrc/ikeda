<template>
  <v-bottom-navigation
    :value="value"
    color="#FFD103"
    class="bottom-navigation"
  >
    <v-btn icon to="/evolution">
      <span>Dashboard</span>

      <v-icon>mdi-home-analytics</v-icon>
    </v-btn>

    <v-btn icon to="/mentorship">
      <span>Mentorias</span>

      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>

    <v-btn icon to="/users">
      <span>Usuários</span>

      <v-icon>mdi-account-multiple</v-icon>
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