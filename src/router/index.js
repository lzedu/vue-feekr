import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'pages/index.vue'
import Vocation from 'pages/vocation.vue'
import Index from 'pages/layout'
import Strategy from 'pages/strategy.vue'
import Profile from 'pages/profile.vue'
import Search from 'pages/search.vue'
import Search_result from 'pages/search_result.vue'
import Information from 'pages/search/information.vue'
import Shop from 'pages/search/shop.vue'
import Choose from 'pages/choose.vue'
import Detail from 'pages/detail.vue'
import Article from 'pages/article.vue'
import CityDetail from 'pages/citydetail.vue'
import List from 'pages/list/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index/home'
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children:[
      {
        path:'home',
        name:'home',
        component:Home
      },
      {
        path:'vocation',
        name:'vocation',
        component:Vocation
      },
      {
        path:'strategy',
        name:'strategy',
        component:Strategy
      },
      {
        path:'profile',
        name:'profile',
        component:Profile
      },
    ]
  },
  {
    path:'/search',
    name:'search',
    component:Search
  },
  {
    path:'/searchresult',
    name:'searchresult',
    redirect:'/searchresult/information',
    component:Search_result,
    children:[
      {
        path:'information',
        name:'information',
        component:Information
      },
      {
        path:'shop',
        name:'shop',
        component:Shop
      }
    ]
  },
  {
    path:'/choose',
    name:'choose',
    component:Choose
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:Detail
  },{
    path:'/article/:id',
    name:'article',
    component:Article
  },
  {
    path:'/citydetail/:id',
    name:'citydetail',
    component:CityDetail
  },
  {
    path:'/list/:key',
    name:'list',
    component:List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
