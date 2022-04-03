<template>
  <div id="itemwrapper">
    <v-card class="pa-6" style="max-width: 1200px">
        <div class="rowdiv">
        <h1>Irgendwas tolles für den Drucker</h1>
        <v-spacer></v-spacer>
        <v-btn class="mx-2" dark color="red">
            <v-icon dark left>mdi-heart</v-icon>{{likes}}
        </v-btn>
        <v-btn class="mx-2">
            Share<v-icon dark right>mdi-share-variant</v-icon>
        </v-btn>
      </div>
      <div class="rowdiv">
        <p>By Random User</p>
        <v-spacer></v-spacer>
      </div>
      <v-divider class="my-8"></v-divider>
      <v-carousel model="0">
        <v-carousel-item v-for="image in images" :key="image">
          <v-img :lazy-src="image" contain max-height="600px" max-width="1200px"></v-img>
        </v-carousel-item>
      </v-carousel>
      <v-expansion-panels accordion class="mt-4">
      <v-expansion-panel>
        <v-expansion-panel-header>View files in 3D</v-expansion-panel-header>
        <v-expansion-panel-content>
          <ThreeDView />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
      <v-card-text
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non,
        quasi fuga officia nesciunt, veniam doloribus accusantium omnis ipsa
        corrupti ipsam veritatis dolorum dolore id dolores libero est deleniti
        nulla?</v-card-text>
      <v-divider class="my-8"></v-divider>
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header>Included Files</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
                <div v-for="file in files" :key="file">
                    <div class="rowdiv" >
                        <v-list-item>{{ file }}</v-list-item>
                        <v-btn icon class="mt-2"><v-icon>mdi-download</v-icon></v-btn>
                    </div>
                    <v-divider></v-divider>
                </div>
              <div class="rowdiv">
              <v-list-item>Download all as ZIP</v-list-item>
              <v-btn icon class="mt-2"><v-icon>mdi-download</v-icon></v-btn>
              </div>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>
<script>
import ThreeDView from '../components/ThreeDView.vue'
export default {
  components: {
    ThreeDView
  },
  data() {
    return {
      images: [
        "https://picsum.photos/800",
        "https://picsum.photos/800",
        "https://picsum.photos/800",
      ],
      files: ["File1", "File2", "File3", "File4"],
      likes: 234687,
    };
  },
};
</script>
<style scoped>
#itemwrapper {
  display: flex;
  justify-content: center;
}
</style>