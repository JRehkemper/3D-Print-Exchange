<template>
  <div>
    <h2 class="px-2">Hello and Welcome to</h2>
    <h1 class="px-2">3D PrintExchange</h1>
    <div class="rowdiv">
    <v-card class="my-6" to="/trending">
      <v-card-title>Trending<v-icon right>mdi-open-in-new</v-icon></v-card-title>
      <v-card-text>See what is currently popular.</v-card-text>
    </v-card>
    <v-card class="my-6" to="/bestofall">
      <v-card-title>Best of all Time<v-icon right>mdi-open-in-new</v-icon></v-card-title>
      <v-card-text>See the most downloaded models of all time.</v-card-text>
    </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      items: [
          {id: 1, title: "Test1", description: "loremipsum lkasdjf asd hfkasd fad ahdfvnabdukfhkasdnbjfsdnajsdlk vnvkjsdf n slkv blk asdbjvclka dsbj", likes: 5},
          {id: 2, title: "Test2 mit ganz ganz langem titel über mehr als zwei zeilen und overflow", description: "Hi I'm Test2", likes: 33462},
          {id: 3, title: "Test3", description: "loremipsum lkasdjf asd hfkasd fad ahdfvnabdukfhkasdnbjfsdnajsdlk vnvkjsdf n slkv blk asdbjvclka dsbj", likes: 45},
          {id: 4, title: "Test4", description: "Howdy Hier ist Test3", likes: 54645},
          {id: 5, title: "Test5", description: "loremipsum lkasdjf asd hfkasd fad ahdfvnabdukfhkasdnbjfsdnajsdlk vnvkjsdf n slkv blk asdbjvclka dsbj", likes: 483},
        ],
    }
  }
  
}
</script>
