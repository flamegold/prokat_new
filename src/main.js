import { createApp } from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import './style.css'

createApp(App)
.use(VueTheMask)
.mount('#app')
