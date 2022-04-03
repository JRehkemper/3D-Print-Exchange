import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        themes: {
            dark: {
                background: '#2C3E50',
                primary: '#3498DB',
                secondary: '#E74C3C',
                default: '#30B795'
            },
        },
        dark: true 
    },
});
