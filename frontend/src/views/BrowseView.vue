<template>
    <div>
        <h1>Browseview</h1>
        <div v-for="item in items" :key="item.id" class="ma-6">
            <ListCard :item="item" />
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
                {id: 1, title: "Test1", description: "Hallo ich bin Test1", likes: 5},
                {id: 2, title: "Test2", description: "Hi I'm Test2", likes: 33462},
            ],
        }
    }
    
}
</script>
