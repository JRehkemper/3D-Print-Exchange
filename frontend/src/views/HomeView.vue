<template>
  <div>
    <div id="HeroBanner">
      <div>
        <h5 class="px-2">Hello and Welcome to</h5>
        <h1 class="px-2">3D PrintExchange</h1>
      </div>
    </div>
    <div class="rowdiv" id="featurePresentation">
      <div style="max-width: 400px">
        <h1>Free 3D Models</h1>
        <p>Every Model uploaded to 3D PrintExchange is free to use for personal use. For commercial use see the included license or contact the owner of the file.</p>
      </div>
      <div style="max-width: 400px">
        <h1>Community Driven</h1>
        <p>3D PrintExchange is kept alive by its Community. That means you guys! No corperate organisations involved.<br>If you want to help, upload your own models, like the work of others and recomend this site your friends.</p>
      </div>
      <div style="max-width: 400px">
        <h1>Open Source</h1>
        <p>3D PrintExchange is an Open Source Project. That means, everyone can look into the source code, recomend changes or contribute their own code. The Codebase is hosted on GitHub.</p>
      </div>
    </div>
    <hr>

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
<style scoped>
#HeroBanner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 500px;
  font-size: 1.8rem;
  background-image: url('../assets/prusa-picture.jpg'), linear-gradient(hsla(204, 70%, 53%, 1), hsla(204, 50%, 40%, 1));
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

#featurePresentation {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>