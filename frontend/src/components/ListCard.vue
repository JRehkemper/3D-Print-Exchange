<template>
  <v-card hover rounded="10" class="px-4 pt-2" width="290" href="/item">
    <!--<v-card-title class="d-block pa-1" style="height: 70px;">{{item.title}}</v-card-title>-->
    <v-img lazy-src="https://picsum.photos/300/" max-width="300" max-height="300" class=" my-2 align-end white--text" gradient="to top, rgba(0,0,0,0.5), rgba(0,0,0,0)" style="word-wrap: break-word;">
      <h3 class="pa-2">{{item.title}}</h3>
    </v-img>
    <v-card-text class="px-2 pt-1" style="height: 60px">
      {{ item.description }}
    </v-card-text>
    <v-card-actions class="ma-0 pa-0 pt-2 rowdiv">
      <v-btn class="mx-1 my-4" style="width: 100px"><v-icon dark left> mdi-content-copy </v-icon>Link</v-btn>
      <v-btn class="mx-1 my-4" style="width: 100px" dark color="red">
        <v-icon dark left> mdi-heart </v-icon>{{ item.likes }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["item"],
};
</script>