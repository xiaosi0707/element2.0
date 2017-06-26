<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <ul>
        <li><router-link to="/foods">商品</router-link></li>
        <li><router-link to="/ratings">评价</router-link></li>
        <li><router-link to="/seller">商家</router-link></li>
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

<style lang="scss" rel="stylesheet/scss">
  @import "./common/sass/index.scss";
  .tab{
    width: rem(750);
    height: rem(80);
    li{
      float: left;
      width:rem(250);
      text-align: center;
    }
  }
</style>
