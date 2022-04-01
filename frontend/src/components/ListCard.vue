<template>
  <v-card class="pa-3">
    <v-card-title>{{ item.title }}</v-card-title>
    <v-img
      src="https://picsum.photos/200/300"
      max-width="200"
      max-height="200"
    ></v-img>
    <v-card-text>
      {{ item.description }}
    </v-card-text>
    <v-card-action>
      <v-btn class="ma-3">Open</v-btn>
      <v-btn class="mx-2"  dark  color="red">
        <v-icon dark left> mdi-heart </v-icon>{{ item.likes }}
      </v-btn>
    </v-card-action>
  </v-card>
</template>
<script>
export default {
    props: [
        'item'
    ]
}
</script>