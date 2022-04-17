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
                    <v-text-field :rules="rules" v-model="formTitle" label="Title"></v-text-field>
                    <v-textarea :rules="rules" v-model="formDescription" label="Description" hint="What is your model exactly?"></v-textarea>
                    <v-file-input v-model="formStl" multiple label="Upload your STL-File"></v-file-input>
                    <v-file-input v-model="formGalleryImage" label="Upload Galleryimages" hint="This will be displayed in search"></v-file-input>
                    <v-file-input multiple label="Upload Images (optional)" hint="This is optional"></v-file-input>
                    <v-text-field v-model="formTags" label="Tags for search (separated by Comma)" hint="Add Tags that are not in your Title or Description."></v-text-field>
                    <v-btn color="primary" class="mt-3" v-if="!this.loginAlarm" @click="uploadModel">Upload your Model</v-btn>
                    <v-btn color="primary" class="mt-3" v-if="this.loginAlarm" disabled>Upload your Model</v-btn>
                    </v-form>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            loginAlarm: false,
            formTitle: "",
            formDescription: "",
            formTags: "",
            formStl: null,
            formGalleryImage: null,
            rules: [ value => !!value || 'Required.'],
        }
    },
    mounted() {
        if(!this.$store.state.loggedIn) {
            console.log("Not logged In")
            this.loginAlarm = true
        }
    },
    methods: {
        uploadModel() {
            //if(this.formTitle == '' || this.formDescription == '' || !this.formStl || !this.formGalleryImage) { return }
            console.log(this.formGalleryImage.name)
            var bodyFormData = new FormData()
            var lastItemID = null
            axios.get(this.$store.state.api+"/getLastItemID")
                .then((response) => {
                    lastItemID = response.data.lastItemID
                    console.log(lastItemID)
                    var itemID = lastItemID + 1
                    bodyFormData.append('itemID', itemID)
                    bodyFormData.append('title', this.formTitle)
                    bodyFormData.append('description', this.formDescription)
                    bodyFormData.append('galleryimage', this.formGalleryImage.name)
                    bodyFormData.append('tags', this.formTags)
                    if(this.formStl > 0) {
                        for(var i = 0; i < this.formStl.length; i++) {
                            bodyFormData.append('stl', this.formStl[i], this.formStl[i].name)
                        }
                    }
                    axios({
                        method: "post", url: this.$store.state.api+"/uploadItem", headers: {"Content-Type":"multipart/form-data"},
                        data: bodyFormData
                    }).then(function(response) {
                        console.log(response)
                    })
                })
            
            
        }
    }
}
</script>