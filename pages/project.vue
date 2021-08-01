<template>
  <div>
    <h2 class="mb-6">My Project</h2>
    <v-row class="projects">
      <v-col v-for="(item, index) in projects" :key="index" md="6" cols="12" class="projects--item mb-5">
        <h4 class="projects--item--title">
          {{ item.title }}
        </h4>
        <div class="projects--item--image">
          <v-img :src="item.image" />
          <div class="d-flex justify-space-between mt-2">
            <div class="projects--item--type font-weight-bold">
              {{ item.type }}
            </div>
            <div class="projects--item--visit">
              <a :href="item.url" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </div>
          <div>
            {{ item.description }}
          </div>
        </div>
      </v-col>
    </v-row>
    <hr>
    <div class="mt-4">
      <h4>Interested to create awesome project with me ?</h4>
      <div class="mb-3">
        Nothing idea too stupid, as long as it fix others problem. we can helps others !
      </div>
      <ContactMe />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      projects: [
        {
          title: 'Mobile Apps Etika Chat Dosen',
          image: require('@/assets/images/project/etika_chat_dosen_project.jpg'),
          type: 'Personal Project',
          url: 'https://play.google.com/store/apps/details?id=com.ken.chat_dosen_helper.release1&hl=en&gl=US',
          description: 'Create personal project mobile apps to help student create message templating.',
        },
        {
          title: 'Sahaware Company Profile',
          image: require('@/assets/images/project/sahaware_project.png'),
          type: 'Corporate Project',
          url: 'http://sahaware.co.id',
          description: 'Create Corporate website profile company as fullstack developer',
        },
        {
          title: 'Klinik Digital Company Profile',
          image: require('@/assets/images/project/digitalklinik_project.png'),
          type: 'Corporate Project',
          url: 'http://klinikdigital.id',
          description: 'Create Corporate website profile company as fullstack developer',
        },
        {
          title: 'Digital Talent Institute Company Profile',
          image: require('@/assets/images/project/dti_project.png'),
          type: 'Corporate Project',
          url: 'http://digitalent.institute',
          description: 'Create Corporate website profile company as fullstack developer',
        },
        {
          title: 'Mydigilearn Website',
          image: require('@/assets/images/project/mydigilearn_project.png'),
          type: 'Corporate Project',
          url: 'http://digitalent.institute',
          description: 'Create Corporate website profile company as front end developer',
        },
        {
          title: 'Detection and counting object',
          image: require('@/assets/images/project/opencv_project.png'),
          type: 'Personal Project',
          url: 'https://www.youtube.com/watch?v=Wx_Bi5Uh_ug&t=265s',
          description: 'Create a app to detect and count object from a given video using openCV and YOLOV3',
        },
        
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects{
  .projects--item{
    padding:10px;
    &:hover{
      position: relative;
      &::before{
        content:'';
        position: absolute;
        width:100%;
        height:100%;
        border: 1px solid white;
        margin:-10px;
      }
    }
    .projects--item--title{
      font-weight: bold;
    }
    .projects--item--visit{
      text-align: right;
    }
  }
}
</style>