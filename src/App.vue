<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <ul>
        <li><router-link to="/goods">商品</router-link></li>
        <li><router-link to="/ratings">评价</router-link></li>
        <li><router-link to="/seller">商家</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
    <v-layer :seller="seller"></v-layer>
  </div>
</template>

<script>
  import VueAxios from 'axios';
  import header from './components/header/header.vue';
  import foods from './components/goods/goods.vue';
  import ratings from './components/ratings/ratings.vue';
  import seller from './components/seller/seller.vue';
  import layer from './components/layer/layer.vue';

  export default {
    components: {
      'v-header': header,
      'v-foods': foods,
      'v-ratings': ratings,
      'v-seller': seller,
      'v-layer': layer
    },
    data() {
      return {
          seller: {}
      };
    },
    created() {
        VueAxios.get('/api/seller').then((response) => {
           if (response.data.errno === 0) {
              let { data } = response.data;
              this.seller = data;
           }
        });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/index.styl";
  .tab
    width rem(750)
    height rem(80)
    line-height rem(80)
    border-1px(rgba(7, 17, 27, 0.1))
    li
      float left
      text-align center
      width rem(250)
      font-size rem(28)
      & > a
        color rgb(77, 85, 93)
        &.active
          color rgb(240, 20, 20)
</style>
