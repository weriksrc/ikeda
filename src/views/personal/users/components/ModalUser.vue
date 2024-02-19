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
      <EvolutionUser :propIdUser="idUser">
        <template v-slot:top>
          <v-btn
            outlined
            :color="!status ? 'green' : 'red'"
            @click="changeStatusUser()"
            >{{ !status ? "Ativar" : "Desativar" }}</v-btn
          >
        </template>
      </EvolutionUser>
    </v-card>
  </v-dialog>
</template>

<script>
import EvolutionUser from "@/views/user/evolution/Index.vue";
import user from "@/services/http/user";

export default {
  props: {
    idUser: {
      type: Number,
    },
    name: {
      type: String,
    },
    status: {
      type: Boolean,
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
    async changeStatusUser() {
      try {
        await user(this.idUser).update({ is_active: !this.status });
      } catch (error) {
        console.error(error);
      } finally {
        this.close();
      }
    },

    close() {
      this.$emit("close");
    },
  },
};
</script>
