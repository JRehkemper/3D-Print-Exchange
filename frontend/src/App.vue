<template>
  <v-app id="inspire">
    <NavSideBar />
    <v-main>
      <v-content class="pa-6">
        <router-view> </router-view>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import NavSideBar from "./components/NavSideBar.vue";
import axios from 'axios'
export default {
  components: {
    NavSideBar,
  },
  data() {
    return {};
  },
  mounted() {
    axios.get("https://auth.jrehkemper.de/api/sessioninfo", {credentials: 'same-origin'})
    .then((response) => {
      console.log("response: "+response.data)
    })
    .catch( err => { console.log("error "+err)})
  }
};
</script>
<style>
.v-btn {
  border-radius: 0.5em;
}

.v-btn a {
  text-decoration: none;
}

.rowdiv {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>