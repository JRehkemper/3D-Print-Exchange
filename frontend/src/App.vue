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
    return {
    };
  },
  mounted() {
    this.$store.commit('setAPI', process.env.VUE_APP_API_URL)
    axios.get("https://auth.jrehkemper.de/api/sessioninfo", {withCredentials: true})
    .then((response) => {
      this.$store.commit('logIn')
      this.$store.commit('setUserID',response.data.userId)
      axios.post(this.$store.state.api+"/getUsername", {
        userID: this.$store.state.userID
      }).then((response) => {
        this.$store.commit('setUsername', response.data.userName)
        console.log(response.data.userName)
      })
    })
    .catch( err => { 
      console.log("error "+err)
      this.$store.commit('logOut')
      var username = "Stranger"
      this.$store.commit('setUsername', username)
    })
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