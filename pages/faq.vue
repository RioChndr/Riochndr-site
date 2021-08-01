<template>
  <div>
    <h2 class="mb-6">FAQ (Frequently Asked Questions)</h2>
    <div>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in faqs" :key="i">
          <v-expansion-panel-header>
            <strong>
              {{ item.question }}
            </strong>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'What framework always you use ?',
          answer: 'Front end using Vue js and Nuxt',
        },
        {
          question: 'Can you hack my ex facebook account ?',
          answer: "Really? 😑 No !!. I'm not author facebook",
        },
      ],
    }
  },
}
</script>

<style></style>
