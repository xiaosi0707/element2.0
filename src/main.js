// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import foods from './components/foods/foods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import VueRouter from 'vue-router';

import './common/stylus/index.styl';

Vue.use(VueRouter);

const routes = [
  {path: '/foods', component: foods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
const router = new VueRouter({
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');

