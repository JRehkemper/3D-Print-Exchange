<template>
    <div class="rowdiv">
        <div style="max-width:1500px; width: 100%;">
            <v-card class="pa-6">
            <h2>Profile</h2>
            <div>
                <v-text-field id="username" :value="$store.state.username" label="Username" @change="changeUsername"></v-text-field>
                <v-text-field :value="$store.state.userID" label="UserID" disabled></v-text-field>
            </div>
            <v-btn color="primary" @click="saveMethod">Save</v-btn>
            </v-card>
        </div>
        <v-snackbar content-class="text-center" timeout=2000 v-model="savePopup">Saved!</v-snackbar>
        <hr>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            savePopup: false
        }
    },
    methods: {
        changeUsername(e) {
            axios.post(this.$store.state.api+"/setUsername", {
                userID: this.$store.state.userID,
                userName: e
            })
            .then((response) => {
                //console.log(response)
                this.$store.commit('setUsername', response.data.username)
            })
            
        },
        saveMethod() {
            this.savePopup=true 
        }
    }
}
</script>
<style scoped>
.text-center {
    text-align: center;
}
</style>