import { createApp } from 'vue'
// import { NButton } from 'naive-ui'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import naive from './plugins/naive'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(naive)
app.use(store)
app.use(router)
app.mount('#app')
