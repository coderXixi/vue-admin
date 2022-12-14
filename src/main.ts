import { createApp } from 'vue'
import './style.css'
import './global.scss'
import App from './App.vue'
import router,{ setupRouter } from "@/router"
import setupPlugins from '@/plugins'
async function bootstrap(){
  const app = createApp(App)
  setupPlugins(app)
  setupRouter(app);
  await router.isReady()
  app.mount('#app')
}
bootstrap()