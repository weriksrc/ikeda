<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="#232323">
        <v-toolbar-title>{{ user.name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon dark @click="close()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <EvolutionUser :propIdUser="user.id">
        <template v-slot:top>
          <v-btn
            outlined
            :color="!user.is_active ? 'green' : 'red'"
            @click="changeStatusUser()"
            >{{ !user.is_active ? "Ativar" : "Desativar" }}</v-btn
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
    user: {
      type: Object,
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
      const formUser = {
        ...this.user,
        is_active: !this.user.is_active,
        pay_date: new Date(),
      };
      try {
        await user(this.user.id).update(formUser);
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
