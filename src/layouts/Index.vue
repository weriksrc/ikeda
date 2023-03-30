<template>
  <div>
    <v-img
      class="img-height"
      :src="imagePage[$route.name].image"
    >
      <div class="user-avatar" v-if="$route.name == 'Profile'">
        <v-avatar color="#777777" size="70" class="mt-2">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </div>
    </v-img>
    <v-card class="limited-height" :color="changeColor()">
      <router-view></router-view>
    </v-card>
    <BottomNavigation v-if="false"/>
    <BottomNavigationPersonal v-if="true"/>
  </div>
</template>
<script>
import BottomNavigation from "./system/BottomNavigation.vue";
import BottomNavigationPersonal from "./system/BottomNavigationPersonal.vue";
import chageImage from "../mixin/chageImage";
export default {
  name: "Portal",
  components: {
    BottomNavigation,
    BottomNavigationPersonal
  },

  mixins: [chageImage],

  data(){
    return{
      currentRoute: '',
    }
  },

  methods: {
    changeColor(){
      return this.$router.history.current.name == 'MentorshipLessons' || this.$router.history.current.name == 'LessonsMentorshipLessons'  ? '#101010' : '#FFFFFF'
    },
    chageImage(route){
      return this.imagePage[route].image
    },

    teste(value){
      return this.imagePage[value].image
    }
  },

};
</script>
<style scoped>
.img-height{
  height: 26vh;
}
.limited-height{
  height: 70vh;
  overflow-y: scroll;
  z-index: 1;
  margin-top: -20px;
  border-radius: 20px 20px 0px 0px;
}

.user-avatar{
  position: absolute;
  width: 100%;
  top: 17px;
  padding-left: 16px;
  display: flex;
  justify-content: flex-start;

}
</style>
