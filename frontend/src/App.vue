<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <Header />
    <v-main class="info">
      <router-view/>
      <v-btn>test</v-btn>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
}
</script>

<style>
#app {
  background-color: #123a53;
}

</style>