import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ar'

const app = createApp(App)
app.use(ElementPlus, {locale})
app.mount('#app')