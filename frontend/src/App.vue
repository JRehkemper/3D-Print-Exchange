<template>
  <v-app>
    <Header />
    <v-main color="background">
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
/*:root {
  --primary-color: #011f4b
}*/

</style>