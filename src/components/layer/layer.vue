<template>
  <div class="layer">
    <h1>{{seller.name}}</h1>
    <div class="star"></div>
    <div class="title">
      <div class="line"></div>
      <div class="text">优惠信息</div>
      <div class="line"></div>
    </div>
    <ul class="supports" v-for="item in seller.supports">
      <li class="support-item"><span class="icon" :class="classMap[item.type]">{{item.type}}</span>{{item.description}}</li>
    </ul>
    <div class="title">
      <div class="line"></div>
      <div class="text">商家公告</div>
      <div class="line"></div>
    </div>
    <div class="bulletin">
      <p class="content">{{seller.bulletin}}</p>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
          seller: {
              type: Object
          }
      },
      data() {
          return {
            classMap: []
          };
      },
      created() {
          this.classMap = ['decrese', 'discount', 'guarantee', 'invoice', 'special'];
          console.log(this.classMap);
      }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl";
  .layer
    position absolute
    top 0
    left 0
    z-index 10
    width 100%
    height 100%
    background rgba(7, 17, 27, 0.8)
    h1
     margin-top rem(128)
     margin-bottom rem(56)
     text-align center
     font-size rem(32)
     color rgb(255, 255, 255)
     font-weight bold
    .title
      margin 0 auto
      width rem(606)
      display flex
      font-size rem(24)
      font-weight bold
      color #FFFFFF
      .line
        -webkit-box-flex 1
        width rem(224)
        border-bottom 1px solid rgba(255,255,255,0.2)
    .supports
      margin rem(48) 0 0 rem(96)
      .support-item
        font-size rem(24)
        line-height rem(24)
        color rgb(255, 255, 255)
        .icon
          display inline-block
          float left
          width rem(32)
          height rem(32)
          margin rem(0) rem(8) 0 0
          background-size rem(32) rem(32)
          background-repeat no-repeat
          &.decrese
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
    .bulletin
      margin rem(50) auto
      width rem(560)
      .content
        font-size rem(24)
        line-height rem(48)
        color rgb(255, 255, 255)
</style>
