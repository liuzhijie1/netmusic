import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js';


// 解决重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title;
  next();
})

router.afterEach((to,from,next)=>{
  window.scrollTo(0,0);
})

export default router
