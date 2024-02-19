<template>
  <div v-if="active" style="position: absolute">
    <v-container class="fill-height" fluid>
      <v-overlay color="grey darken-4" :value="true">
        <img :src="logo" alt="Logo" width="100" />
        <v-row class="pt-3">
          <div
            v-if="this.icons.length == 0"
            style="width: 25px; height: 25px"
          ></div>
          <v-col
            cols="4"
            class="pa-2"
            v-for="(icon, index) in icons"
            :key="index"
          >
            <v-icon color="#FFD103">
              {{ icon }}
            </v-icon>
          </v-col>
        </v-row>
        <span
          style="font-size: 2em; font-weight: bold; color: #212121"
          class="d-flex justify-center"
          >{{ message }}</span
        >
      </v-overlay>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "LoaderCometa",

  props: {
    message: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      logo: "",
      icons: [],
    };
  },

  computed: {
    currentIcon() {
      return this.icons[this.currentIndex];
    },
  },

  created() {
    this.logo = require(`../assets/img/loading-ikeda.svg`);
    this.intervalId = setInterval(() => {
      if (this.icons.length < 4) {
        this.icons.push("mdi-dumbbell");
      }
      if (this.icons.length == 4) {
        this.icons = [];
      }
    }, 500);
  },
  // mounted() {
  //   this.intervalId = setInterval(() => {
  //     if (this.icons.length < 4) {
  //       this.icons.push("mdi-dumbbell");
  //     }
  //     if (this.icons.length == 4) {
  //       this.icons = [];
  //     }
  //   }, 500);
  // },
};
</script>
<style>
.v-overlay__content {
  display: ruby;
}
</style>
