<template>
  <v-app id="inspire">
    <NavSideBar />
    <v-content class="pa-6 mt-10">
      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavSideBar from "./components/NavSideBar.vue";
export default {
  components: {
    NavSideBar,
  },
  data() {
    return {};
  },
};
</script>