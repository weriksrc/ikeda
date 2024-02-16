<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="#232323">
        <v-toolbar-title>{{ name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon dark @click="close()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <EvolutionUser :propIdUser="idUser" />
    </v-card>
  </v-dialog>
</template>

<script>
import EvolutionUser from "@/views/user/evolution/Index.vue";
export default {
  props: {
    idUser: {
      type: Number,
    },
    name: {
      type: String,
    },
    dialog: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    EvolutionUser,
  },

  data() {
    return {};
  },

  methods: {
    close() {
      console.log("idUser", this.idUser);
      this.$emit("close");
    },
  },
};
</script>
