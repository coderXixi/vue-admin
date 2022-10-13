import { App } from "vue";
import {createRouter,createWebHashHistory} from "vue-router";
import routers  from "./routes";
import layoutRoutes from "./autolaod/index";
import guard from "./guard"
console.log('layoutRoutes',layoutRoutes);

const router=createRouter({
  history:createWebHashHistory(),
  routes:[...routers],
})

export default router

export function setupRouter(app:App){
  //路由拦截
  guard(router)
  app.use(router)
}