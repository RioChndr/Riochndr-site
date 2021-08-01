<template>
  <div>
    <h2 class="mb-6">Hello fellows</h2>
    My name is
    <h1>
      <a href="#">Rio chandra</a>
    </h1>
    <blockquote class="my-6">
      <i>
      "To make one good action succeed another, is the perfection of goodness." - Ali bin Abi Thalib
      </i>
    </blockquote>
    <div class="mb-3">
      I'm an {{ myAge }} Year old young programmer. Website developer. Experience
      {{ yearsExperience }} year create website, mobile apps and some personal
      project. I create a beautiful and fully functional website to help company
      to solve their complex customer problem. <br />
      currently i'm working at
      <a href="http://sahaware.co.id" target="_blank" rel="noopener noreferrer"
        >PT. Sahaware Technology Indonesia</a
      >. Take a look <nuxt-link to="/project"> my project </nuxt-link>
    </div>
    <div class="mb-3">
      Programming languange and framework :
      <ul>
        <li>
          <a href="http://php.net" target="_blank" rel="noopener noreferrer">PHP</a>. PHP is my first programming languange since 2013
        </li>
        <li>
          <a href="http://javascript.com" target="_blank" rel="noopener noreferrer">Javascript</a>. Currently i'm working as front end developer using javascript programming languange
        </li>
        <li>
          <a href="http://vuejs.org" target="_blank" rel="noopener noreferrer">Vue js</a>. I ♥ Vue JS !!. this framework so simple the flexibility and rules framework fit with my project. I have working using vue js more than {{ yearsWorkingVue }} years.
        </li>
        <li>
          <a href="http://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt Js</a>. I use nuxt as standard project structur for vue js project.
        </li>
      </ul>
    </div>
    <div>
      I love challange and learn a weird programming languange like brainf*ck
      languange. I show you how to write "RIO CHANDRA" in brainf*ck languange
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
    yearsWorkingVue(){
      return new Date().getFullYear() - 2017
    }
  },
}
</script>
