import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSource from 'vue-resource'

Vue.config.debug=1;

Vue.use(VueRouter);
Vue.use(VueSource);

import othercomponent1 from './components/1.vue'
import othercomponent2 from './components/2.vue'

const router=new  VueRouter ({
  mode:'history',
  base:__dirname,
  routes:[{
    path:'/first',
    component:othercomponent1
  },
  {
    path:'/sec',
    component:othercomponent2
  }]
})
new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app');
