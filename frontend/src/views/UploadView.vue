<template>
    <div class="rowdiv">
        <div style="max-width:1500px; width: 100%;">
            <v-card>
                <v-form class="pa-6" >
                <v-text-field label="Title"></v-text-field>
                <v-textarea label="Description" hint="What is your model exactly?"></v-textarea>
                <v-file-input multiple label="Upload your STL-File"></v-file-input>
                <v-file-input multiple label="Upload some Images" hint="This is optional"></v-file-input>
                <v-text-field label="Tags" hint="Add Tags that are not in your Title or Description. Seperate by Comma"></v-text-field>
                <v-btn color="primary">Upload Files</v-btn>
                </v-form>
            </v-card>
        </div>
    </div>
</template>