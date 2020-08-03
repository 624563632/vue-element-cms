import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from '@/utils/navs'
const Login=()=>import('./components/')

const arr = []
// 一层循环
routes.map(ele=>{
  arr.push({path:ele.path, component:ele.comm})
    if(ele.children) {
      ele.children.map(e=>{
        arr.push({path:e.path, component:e.comm})
      })
    }
  })



const router= new VueRouter({
    routes:[
        ...arr,
        { path:'/login',components: {login:Login}},
        // { path:'/*',redirect:'/login'}
    ]
})

router.beforeEach(function(to, from, next) {
    if (to.path != '/login') {
      if(localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  })
export default router