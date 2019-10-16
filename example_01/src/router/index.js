import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/singles/Home'
import course from '@/components/singles/Course'
import answer from '@/components/singles/answer'
import vip from '@/components/singles/vip'
import first from '@/components/singles/first'
import second from '@/components/singles/second'
import third from '@/components/singles/third'
import home_left from '@/components/singles/Home_left'
import home_right from '@/components/singles/Home_right'
import user from '@/components/singles/user'
import Axios_sample from '@/components/axios_samples/sample_01'
import GoodsDemo from '@/components/Goods/GoodsDemo'


Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass:'activeclass',
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    console.log(from)
    console.log(savedPosition)
    if (savedPosition) { //如果savedPosition存在，滚动条会自动跳到记录的值的地方
      console.log(savedPosition)
      return savedPosition
    } else {
      return { x: 0, y: 0 }//savedPosition也是一个记录x轴和y轴位置的对象
     }
    },
  routes: [
    {
      path:'/',
      components:{
        default:Home,
        left:home_left,
        right:home_right
      }
    },
    {
      path:'/Course',
      component:course
      // beforeEnter(to,from,next){
      //   alert('course start!')
      //   next()
      // }
    },
    {
      path:'/vip',
      component:vip,
      meta:{
        require:true
      },
      children:[
        {
          path:'first',
          component:first
        },
        {
          path:'second',
          component:second
        },
        {
          path:'third',
          component:third
        }
      ]
    },
    {
      path:'/answer',
      component:answer
    },
    {
      path:'now',
      redirect:'/'
    },
    {
      path:'/user/:id?',
      component:user,
      props:true
    },
    {
      path:'/axios_sh',
      component:Axios_sample
    },
    {
      path:'/vuex',
      component:GoodsDemo
    }
  ]
})

router.beforeEach((to,from,next) => {
  console.log('进入路由前'+to.meta)
  if(to.meta.require)
  {
    //need to login in
    alert('请登录！')
  }else
  {
    next()
  }
  next()
})


export default router