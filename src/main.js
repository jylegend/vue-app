// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueRouter from 'vue-router'
import Resource from 'vue-resource'
import '../theme/index.css'
import ElementUI from 'element-ui'

import index from './components/index.vue'

Vue.use(ElementUI,{size:'small'})
Vue.use(vueRouter)
Vue.use(Resource)
Vue.config.productionTip = false

const _copyRouter = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', component: index
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  router:_copyRouter,
  render:h=>h(App)
}).$mount( '#app')
