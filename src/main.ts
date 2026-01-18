import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1. 引入
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // 2. 挂载 Pinia (注意要写在 mount 之前)
app.use(router)

app.mount('#app')