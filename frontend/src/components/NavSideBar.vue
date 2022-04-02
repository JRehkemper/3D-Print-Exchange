<template>
    <nav>
        <v-app-bar app flat>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>3D PrintExchange</v-toolbar-title>
            <v-spacer></v-spacer>
            <div id="searchdiv" style="width:250px" class="px-2">
                <v-text-field class="pt-6"  label="Search"></v-text-field>
            </div>
            <v-btn class="mx-2">Login</v-btn>
            <v-btn dark class="mx-2">
                <v-icon dark left> mdi-github </v-icon>
                <a href="https://github.com/JadBlackstone/3D-Print-Exchange" style="color: white;">GitHub</a>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" fixed app >
            <v-list-item class="pt-2" to="/profile">
                <v-list-item-avatar>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>
                <v-list-item-title class="text-h6">Hello Stranger</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" :to="item.link">
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
                { title: 'Dashboard', icon: 'mdi-view-dashboard', link: "/" },
                { title: 'Photos', icon: 'mdi-image', link: '/about' },
                { title: 'About', icon: 'mdi-help-box', link: '/about' },
            ]
        }
    },
    methods: {

    }
}
</script>