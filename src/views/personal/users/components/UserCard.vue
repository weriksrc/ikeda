<template>
  <div>
  <v-card class="user-card" @click="dialog = true">
    <v-img src="../../../../assets/img/user-card.png">
      <div class="user-information">
        <v-avatar color="#777777" size="60" class="mt-2">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
        <p class="ma-0 mt-2 subtitle-2">{{ formatName(name) }}</p>
        <p :class="classAtivo(status)">{{ status ? 'Ativo' : 'Inativo' }}</p>
      </div>
    </v-img>
  </v-card>
  <ModalUser :dialog="dialog" :idUser="id" :name="name" @close="dialog = false" />
  </div>
</template>

<script>
import  ModalUser from "@/views/personal/users/components/ModalUser.vue";
export default {
  props:["id","status","name"],

  components:{
    ModalUser
  },

  data(){
    return{
      dialog: false
    }
  },

  methods:{
    formatName(name){
      let arrayName = name.split(" ")
      return arrayName[1] == 'de' ? `${arrayName[0]}` + ` ${arrayName[2]}` : `${arrayName[0]}` + ` ${arrayName[1] || ''} `
    },

    classAtivo(status){
      return status ? 'ma-0 mt-2 subtitle-2 font-weight-bold green--text' :'ma-0 mt-2 subtitle-2 font-weight-bold red--text'
    },

    teste(id){
      console.log("id", id);
    }
  }
}
</script>

<style scoped>
.user-card{
  border-radius: 10px;
}

.user-information{
  position: absolute;
  text-align: center;
  width: 100%;
}

</style>