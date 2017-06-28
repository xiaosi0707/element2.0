<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item border-1px" v-for="(item, index) in goods" :class="{'current': currentIndex === index}" @click="selectMenu(index)">
          <span class="text"><span v-show="item.type>0" class="icon" :class="classMap[item.type]" ></span>{{item.name}}</span>
        </li>
      </ul>
    </div>
      <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li class="food-list food-list-hook" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item border-1px" v-for="food in item.foods">
              <div class="icon">
                <img :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <v-cartControl :goods="goods"></v-cartControl>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <v-shopCart :seller="seller"></v-shopCart>
  </div>
</template>

<script>
  import VueAxios from 'axios';
  import BScroll from 'better-scroll';

  import shopCart from '../shopcart/shopcart.vue';
  import cartControl from '../cartcontrol/cartcontrol.vue';

  export default {
    components: {
        'v-shopCart': shopCart,
      'v-cartControl': cartControl
    },
    props: {
        seller: {
            type: Object
        }
    },
    data() {
      return {
        goods: [],
        classMap: [],
        listHeight: [],
        scrollY: 0
      };
    },
    computed: {
        currentIndex() {
            console.log(this.scrollY);
            for (let i = 0; i < this.listHeight.length; i++) {
              let height1 = this.listHeight[i];
              let height2 = this.listHeight[i + 1];
              console.log(height1 + '|' + height2);
              if (this.scrollY >= height1 && this.scrollY <= height2) {
                return i;
              }
            };
            return 0;
        }
    },
    created() {
      this.classMap = ['decrese', 'discount', 'guarantee', 'invoice', 'special'];
      VueAxios.get('/api/goods').then((response) => {
        if (response.data.errno === 0) {
          let { data } = response.data;
          this.goods = data;
          this.$nextTick(() => {
            this.initScroll();
            this.getHeight();
          });
        }
      });
    },
    methods: {
      selectMenu(index) {
        let foodList = this.$refs.foodWrapper.querySelectorAll('.food-list-hook');
        let el = foodList[index];
        this.foodScroll.scrollToElement(el, 300);
      },
      initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          probeType: 3
        });
        this.foodScroll.on('scroll', (pos) => {
           this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      getHeight() {
        let foodsList = this.$refs.foodWrapper.querySelectorAll('.food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodsList.length; i++) {
          height += foodsList[i].clientHeight;
          this.listHeight.push(height);
        };
        console.log(this.listHeight);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl";
  .goods
    display: flex
    width rem(750)
    position: absolute
    top: rem(348)
    bottom: rem(92)
    overflow hidden
    .menu-wrapper
      width rem(160)
      float left
      background: #f3f5f7
      .menu-item
        display: table
        height: rem(108)
        width: rem(112)
        line-height: rem(28)
        padding: 0 rem(28)
        &.current
          position: relative
          z-index: 10
          margin-top: rem(-1)
          font-weight: 700
          background: #FFFFFF
        .icon
          display: inline-block
          vertical-align: top
          width rem(24)
          height rem(24)
          margin-right rem(4)
          background-size: rem(24) rem(24)
          background-repeat: no-repeat
          &.decrese
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: rem(112)
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: rem(24)
    .foods-wrapper
      float right
      width rem(590)
      .food-list
        .food-item
          width 100%
          overflow hidden
        .title
          border-left 4px #D9DDE1 solid
          padding-left rem(36)
          width 100%
          height rem(52)
          line-height rem(52)
          background rgb(243, 245, 247)
          font-size rem(28)
          color rgb(147, 153, 159)
          font-weight bold
        .icon
          float left
          width rem(114)
          img
            margin rem(36)
            width rem(114)
            height rem(114)
            border-radius 4px
        .content
          float right
          margin-top rem(42)
          width rem(404)
          line-height rem(32)
          .name
            font-size rem(28)
            color rgb(7, 17, 27)
          .desc
            font-size rem(20)
            color rgb(147, 153, 159)
          .extra, .price
            font-size rem(24)

</style>
