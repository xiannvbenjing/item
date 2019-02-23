import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/home',component:homeComponent
    },
    
    {
      path:'/member',component:memberComponent
     },
     {
      path:'/shopcar',component:shopcarComponent
     },
     {
      path:'/search',component:searchComponent
     },
  ],
  linkActiveClass: 'mui-active'//类库
})
