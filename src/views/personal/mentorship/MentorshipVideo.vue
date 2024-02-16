<template>
  <div>
    <iframe
      class="backgound-video"
      :src="linkVideo"
      style="
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        z-index: 0;
      "
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
    ></iframe>
    <v-app-bar class="appBar" dark color="#232323">
      <v-toolbar-items>
        <v-btn icon dark @click="back()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-toolbar-items>
      <!-- <v-toolbar-title>{{ name }}</v-toolbar-title> -->
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkVideo: "",
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
  },

  mounted() {
    this.linkVideo = `https://player.vimeo.com/video/${this.$router.history.current.params.link}?autoplay=1`;
  },
};
</script>

<style>
.backgound-video {
  background-color: #101010;
}

.appBar {
  position: absolute;
}
</style>
