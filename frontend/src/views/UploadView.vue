<template>
    <div>
        <v-alert v-if="this.loginAlarm" prominent type="error">
            <p>You need to log in to Upload something. If you proceed now, nothing will be saved</p>
        </v-alert>
        <div class="rowdiv">
            <div style="max-width:1500px; width: 100%;">
                <v-card>
                    <v-card-title class="pa-6">Upload something</v-card-title>
                    <v-form class="pa-6" >
                    <v-text-field label="Title"></v-text-field>
                    <v-textarea label="Description" hint="What is your model exactly?"></v-textarea>
                    <v-file-input multiple label="Upload your STL-File"></v-file-input>
                    <v-file-input multiple label="Upload Images (optional)" hint="This is optional"></v-file-input>
                    <v-text-field label="Tags for search (separated by Comma)" hint="Add Tags that are not in your Title or Description."></v-text-field>
                    <v-btn color="primary" class="mt-3">Upload your Model</v-btn>
                    </v-form>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginAlarm: false,
        }
    },
    mounted() {
        if(!this.$store.state.loggedIn) {
            console.log("logged In")
            this.loginAlarm = true
        }
    }
}
</script>