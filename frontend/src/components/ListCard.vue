<template>
  <v-card hover class="px-6 py-2" width="300" href="/item">
    <v-card-title width="200" class="d-block pa-1">{{item.title}}</v-card-title>
    <v-img src="https://picsum.photos/300/" max-width="300" max-height="300">
      
    </v-img>
    <v-card-text class="pa-0 pt-1" style="height: 60px">
      {{ item.description }}
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn class="ma-3">Open</v-btn>
      <v-btn class="mx-2" dark color="red">
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