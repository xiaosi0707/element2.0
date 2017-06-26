// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import './common/sass/index.scss';

Vue.use(VueRouter);

const routes = [
  {path: '/foods', components: './components/foods/foods.vue'},
  {path: '/ratings', components: './components/ratings/ratings.vue'},
  {path: '/seller', components: './components/seller/seller.vue'}
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
});
