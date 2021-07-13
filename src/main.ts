import { createApp } from 'vue'
// import { NButton } from 'naive-ui'
import App from './App.vue'
import naive from './plugins/naive'
import router from './router/index'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(naive)
app.use(router)
app.mount('#app')
