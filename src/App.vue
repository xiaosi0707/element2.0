<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <ul>
        <li>商品</li>
        <li>评价</li>
        <li>商家</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  import foods from './components/foods/foods.vue';
  import ratings from './components/ratings/ratings.vue';
  import seller from './components/seller/seller.vue';

  export default {
    components: {
      'v-header': header,
      'v-foods': foods,
      'v-ratings': ratings,
      'v-seller': seller
    }
  };
</script>

<style>

</style>
