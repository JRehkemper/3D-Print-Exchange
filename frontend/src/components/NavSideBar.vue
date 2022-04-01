<template>
    <nav>
        <v-app-bar app flat>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>3D PrintExchange</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" fixed app clipped>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="text-h6">Navigation</v-list-item-title>
                <!--<v-list-item-subtitle> subtext </v-list-item-subtitle>-->
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                { title: 'Photos', icon: 'mdi-image' },
                { title: 'About', icon: 'mdi-help-box' },
            ]
        }
    }
}
</script>