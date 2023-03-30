const chageImage = {
  computed: {
    imagePage() {
      return {
        Evolution:{
          image: require('@/assets/img/evolucao.png')
        },
        Lessons:{
          image: require('@/assets/img/treinos.png')
        },
        Profile:{
          image: require('@/assets/img/perfil.png')
        },
        Dashboard:{
          image: require('@/assets/img/home.png')
        },
        Mentorship:{
          image: require('@/assets/img/mentoria.png')
        },
        MentorshipLessons:{
          image: require('@/assets/img/mentoria.png')
        },
        MentorshipVideo:{
          image: require('@/assets/img/mentoria.png')
        },
        Users:{
          image: require('@/assets/img/alunos.png')
        }
      };
    }
  }
};

export default chageImage;