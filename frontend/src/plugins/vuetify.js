// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        background: '#ffffff',
      }
    },
    light: true,
  } 
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
