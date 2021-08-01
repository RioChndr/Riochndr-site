<template>
  <v-app dark>
    <v-main>
    <MainHeader />
      <v-container>
        <v-col lg="6" cols="12">
          <Nuxt />
        </v-col>
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {

}
</script>
