//vue
import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
//vue-router
import { router } from "@/router/index"
//pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// vant
import { Button } from 'vant';
import 'vant/lib/index.css';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).use(Button).mount('#app')
