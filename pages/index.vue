<template>
  <div>
    <h2 class="mb-6">Hello fellows</h2>
    My name is
    <h1>
      <a href="#">Rio chandra</a>
    </h1>
    <div>
      Yes, I'm a programmer {{ myAge }} Years old. Website developer. Experience
      {{ yearsExperience }} years create website, mobile apps and some personal
      project. I create a beautiful and fully functional website to help company
      to solve their complex customer problem. <br />
      currently i'm working at
      <a href="http://sahaware.co.id" target="_blank" rel="noopener noreferrer"
        >PT. Sahaware Technology Indonesia</a
      >. Take a look <nuxt-link to="/project"> my project </nuxt-link>
    </div>
    <div>
      I love challange and learn a weird programming languange like brainf*ck
      languange. I show you how to write my name in brainf*ck languange
    </div>
    <v-col md="6">
      <fieldset class="pa-3">
        <legend>Brainf*ck Programming Languange</legend>
        <!-- eslint-disable-next-line vue/no-parsing-error -->
        >++++ ++++[>++++ ++++ ++<-]>++.>++++ ++++[>++++ ++++ ++<-]>++---- ---- -.++++ ++.>>++++[<++++ ++++>-]<.>>++++ ++++[<++++ ++++>-]<+++.>>++++ ++++[<++++ ++++>-]<++++ ++++.>>++++ ++++[<++++ ++++>-]<+.<++++ ++.>+++.<<<<+++.>>--. <br /> Run this code at
        <a
          target="_blank"
          href="https://www.tutorialspoint.com/execute_brainfk_online.php"
          >Brainf*ck executor</a
        >
      </fieldset>
    </v-col>
    <ContactMe />
  </div>
</template>

<script>
export default {
  computed: {
    yearsExperience() {
      return new Date().getFullYear() - 2015
    },
    myAge() {
      return new Date().getFullYear() - 1999
    },
  },
}
</script>
