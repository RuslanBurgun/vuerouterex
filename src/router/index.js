import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/contact',
      component: Contact,
      name: 'contact'
    }
  ]
})
export default router
