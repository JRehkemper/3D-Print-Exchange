<template>
    <nav>
        <v-app-bar app flat>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>3D PrintExchange</v-toolbar-title>
            <v-spacer></v-spacer>
            
            <div id="searchdiv">
                <v-text-field style="transition: width 0.3s;" @focus="searchActive=true; searchInactive=false" @blur="searchActive=false; searchInactive=true" :class="[{searchExpand: searchActive}, {searchMini: searchInactive}]" class="pt-6" label="Search"></v-text-field>
            </div>
            <v-btn color="primary" class="mx-2">Login</v-btn>
            <v-btn dark class="mx-2">
                <v-icon dark left> mdi-github </v-icon>
                <a href="https://github.com/JadBlackstone/3D-Print-Exchange" style="color: white;">GitHub</a>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer overlay-color="primary" v-model="drawer" fixed app >
            <v-list-item class="pt-2" to="/profile">
                <v-list-item-avatar>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>
                <v-list-item-title class="text-h6" style="color: white;">Hello Stranger</v-list-item-title>
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
            <v-spacer></v-spacer>
            <v-list style="position: absolute; bottom: 0px;">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon right>mdi-git</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Version 0.0.1</v-list-item-title>
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
            searchActive: false,
            searchInactive: true,
            drawer: null,
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard', link: "/" },
                { title: 'Trending', icon: 'mdi-trending-up', link: '/trending' },
                { title: 'Best of all Time', icon: 'mdi-trophy-variant', link: '/bestofall' },
                { title: 'Look at my print', icon: 'mdi-image-multiple', link: '/lookatmyprint' },
                { title: 'Upload new Model', icon: 'mdi-upload', link: '/upload' },
                { title: 'About 3D PrintExchange', icon: 'mdi-help-box', link: '/about' },
            ],
            
        }
    },
    methods: {
        toogleSearch() {
            this.searchActive != this.searchActive
        }
    }
}
</script>
<style scoped>
.theme--dark.v-list-item--active::before {
    color: #3498DB;
    opacity: 0.75;
    z-index: -500;
}

.searchExpand {
    width:500px;
}

.searchMini {
    width:250px;
}

@keyframes searchExpand {
    0% {
        width: 250px;
    }
    100% {
        width: 500px;
    }
    
}
</style>