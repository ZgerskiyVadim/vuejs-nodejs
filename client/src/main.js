import Vue from 'vue'
import VueRouter from 'vue-router'
import {store} from './store'

import ReadMore from './components/ReadMore.vue'
import FirstPage from './components/FirstPage.vue'
import Settings from './components/Settings.vue'
import headerComponent from './components/headerComponent/Header.vue'
import SingIn from './components/SingIn.vue';
import Registration from './components/Registration.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  hashbang: false,
  linkActiveClass: 'active',
  transitionOnLoad: true,
  routes: [
    { path: '/', component: FirstPage },
    { path: '/vacancies/:id', name: 'readMore', component: ReadMore },
    {path: '/settings', component: Settings},
    {path: '/singin', component: SingIn},
    {path: '/registration', component: Registration}
  ]})

new Vue({
  el: '#app',
  router,
  store,
  components: {headerComponent}
})
