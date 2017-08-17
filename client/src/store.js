import Vue from 'vue'
import Vuex from 'vuex'
import vacanciesModule from './vuex/modules/vacanciesModule'
import userModule from './vuex/modules/userModule'
import getters from './vuex/getters/vacancyGetter'
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        vacanciesModule,
        userModule
    },
  getters
})