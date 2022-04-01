<template>
    <div>
        <h2>Browseview</h2>
        <div class="d-flex">
            <v-container v-for="item in items" :key="item.id" class="ma-1 d-flex" style="width: 300px;">
                <ListCard :item="item"/>
            </v-container>
        </div>
    </div>
</template>
<script>
import ListCard from '../components/ListCard.vue'
export default {
    components: {
        ListCard,
    },
    data() {
        return {
            items: [
                {id: 1, title: "Test1", description: "loremipsum lkasdjf asd hfkasd fad ahdfvnabdukfhkasdnbjfsdnajsdlk vnvkjsdf n slkv blk asdbjvclka dsbj", likes: 5},
                {id: 2, title: "Test2", description: "Hi I'm Test2", likes: 33462},
                {id: 3, title: "Test3", description: "Howdy Hier ist Test3", likes: 54645},
            ],
        }
    }
    
}
</script>
