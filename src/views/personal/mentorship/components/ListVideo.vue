<template>
  <v-list class="pa-0">
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(treino, i) in treinos"
        :key="i"
      >
        <v-list-item-content>
            <v-list-item-title @click="mentorshipPage(treino.link)">{{ formatName(treino.name) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {

  props:['mentorshipId', 'mentorshipWeekId'],
  
  data(){
    return{
      selectedItem:'',
      treinos:[
	{
		"name": "treino_de_peito_e_tríceps (540p)",
		"link": "809596214",
		// "link": "https://vimeo.com/809596214",
		"width": 480,
		"height": 848,
		"duration": 88,
		"embed": {
			"html": "<iframe src=\"https://player.vimeo.com/video/809596214?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=263897\" width=\"480\" height=\"848\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen title=\"treino_de_peito_e_tríceps (540p)\"></iframe>",
			"badges": {
				"hdr": false,
				"live": {
					"streaming": false,
					"archived": false
				},
				"staff_pick": {
					"normal": false,
					"best_of_the_month": false,
					"best_of_the_year": false,
					"premiere": false
				},
				"vod": false,
				"weekend_challenge": false
			},
			"buttons": {
				"watchlater": true,
				"share": true,
				"embed": true,
				"hd": false,
				"fullscreen": true,
				"scaling": true,
				"like": true
			},
			"logos": {
				"vimeo": true,
				"custom": {
					"active": false,
					"use_link": false,
					"sticky": false
				}
			},
			"title": {
				"name": "user",
				"owner": "user",
				"portrait": "user"
			},
			"end_screen": [],
			"playbar": true,
			"pip": true,
			"autopip": true,
			"volume": true,
			"color": "00adef",
			"colors": {
				"color_one": "000000",
				"color_two": "00adef",
				"color_three": "ffffff",
				"color_four": "000000"
			},
			"event_schedule": true,
			"interactive": false,
			"has_cards": false,
			"outro_type": "videos",
			"show_timezone": false,
			"cards": [],
			"speed": true
		}
	},
	{
		"name": "treino_de_ombro_e_abs (540p)",
		"link": "809596068",
		// "link": "https://vimeo.com/809596068",
		"width": 480,
		"height": 848,
		"duration": 84,
		"embed": {
			"html": "<iframe src=\"https://player.vimeo.com/video/809596068?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=263897\" width=\"480\" height=\"848\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen title=\"treino_de_ombro_e_abs (540p)\"></iframe>",
			"badges": {
				"hdr": false,
				"live": {
					"streaming": false,
					"archived": false
				},
				"staff_pick": {
					"normal": false,
					"best_of_the_month": false,
					"best_of_the_year": false,
					"premiere": false
				},
				"vod": false,
				"weekend_challenge": false
			},
			"buttons": {
				"watchlater": true,
				"share": true,
				"embed": true,
				"hd": false,
				"fullscreen": true,
				"scaling": true,
				"like": true
			},
			"logos": {
				"vimeo": true,
				"custom": {
					"active": false,
					"use_link": false,
					"sticky": false
				}
			},
			"title": {
				"name": "user",
				"owner": "user",
				"portrait": "user"
			},
			"end_screen": [],
			"playbar": true,
			"pip": true,
			"autopip": true,
			"volume": true,
			"color": "00adef",
			"colors": {
				"color_one": "000000",
				"color_two": "00adef",
				"color_three": "ffffff",
				"color_four": "000000"
			},
			"event_schedule": true,
			"interactive": false,
			"has_cards": false,
			"outro_type": "videos",
			"show_timezone": false,
			"cards": [],
			"speed": true
		}
	}
]
    }
  },

  methods:{
    formatName(value){
      let name =  value.split(" ")[0].replaceAll("_", " ")
      name = `${name.charAt(0).toUpperCase() + name.slice(1)}`
      return name
    },
    // async mentorshipVideo(){

    // },

    mentorshipPage(link){
      this.$router.push(`/mentorship/${link}`)
    },
  },

  mounted(){
    // this.mentorshipVideo(){}
  }
  
}
</script>

<style scoped>
.v-application .primary--text {
    color: #FFD103 !important;
    caret-color: #FFD103 !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #fff;
}

.theme--light.v-list {
  background: #101010;
  color: rgba(0, 0, 0, 0.87);
}
</style>