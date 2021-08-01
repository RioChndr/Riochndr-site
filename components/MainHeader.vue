<template>
  <v-container>
    <v-col md="6" class="d-flex align-center menu">
      <nuxt-link to="/" class="link__unique">
        <v-avatar class="mr-3">
          <v-img :src="require('@/assets/images/riochandra-avatar.JPG')" />
        </v-avatar>
      </nuxt-link>
      <nuxt-link v-for="(menu, index) in menus" :key="index" :to="menu.to" class="menu--item">
        {{ menu.title }}
      </nuxt-link>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      menus: [
        {
          title: 'Hello fellows',
          to: '/'
        },
        {
          title: 'Project',
          to: '/project'
        },
        {
          title: 'FAQ',
          to: '/faq'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{

  .menu--item{
    margin:0 10px;
    &.nuxt-link-exact-active{
      color:white;
    }
  }
}
</style>