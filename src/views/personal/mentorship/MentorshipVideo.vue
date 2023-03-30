<template>
  <div>
    <iframe
      class="backgound-video"
      :src="linkVideo"
      style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
		></iframe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      linkVideo:''
    }
  },

  mounted(){
    this.linkVideo = `https://player.vimeo.com/video/${this.$router.history.current.params.link}?autoplay=1`
  }
}
</script>

<style>
.backgound-video{
background-color: #101010 ;
}
</style>