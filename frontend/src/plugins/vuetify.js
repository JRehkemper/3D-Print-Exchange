// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#111111',
        background: '#777777',
      }
    },
    dark: true,
  }
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
