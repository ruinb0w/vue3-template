//vue
import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
//vue-router
import { router } from "@/router/index"
//pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).use(router).mount('#app')
