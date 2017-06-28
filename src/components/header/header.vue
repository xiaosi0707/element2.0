<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}} / {{seller.deliveryTime}}分钟送达</div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img width="100%" height="100%" :src="seller.avatar">
    </div>
    <div class="detail" transition="fade" v-show="isShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name"></h1>
          <div class="star-wrapper">

          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="support-item" >
              <span class="icon"></span>
              <span class="text"></span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content"></p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close">aaa</i>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      props: {
          seller: {
              type: Object
          }
      },
      data() {
          return {
              classMap: [],
              isShow: false
          };
      },
    created() {
      this.classMap = ['decrese', 'discount', 'guarantee', 'invoice', 'special'];
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl";
  .header
    position relative
    overflow:hidden
    color: #fff
    background: rgba(7, 17, 27, 0.5)
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display inline-block
        margin-right rem(32)
        vertical-align top

        img
          border-radius: 2px
      .content
        display inline-block
        font-size rem(14)
        .title
          margin rem(2) 0 rem(8) 0
          .brand
            display inline-block
            vertical-align top
            width rem(60)
            height rem(36)
            bg-image('brand')
            background-size: rem(60) rem(36)
            background-repeat: no-repeat
          .name
            margin-left rem(6)
            font-size rem(16)
            line-height rem(18)
            font-weight bold
        .description
          margin rem(16) 0 rem(20) 0
          line-height rem(12)
          font-size rem(24)
          color rgb(255, 255, 255)
        .supports
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
          .text
            float left
            margin-top rem(3)
            font-size: rem(24)
  .support-count
    position: absolute
    right: rem(12)
    bottom: rem(72)
    padding: 0 rem(16)
    height: rem(48)
    line-height: rem(48)
    border-radius: rem(28)
    background: rgba(0, 0, 0, 0.2)
    text-align: center
    .count
      vertical-align: top
      font-size: rem(10)
  .icon-keyboard_arrow_right
    margin-left: rem(2)
    line-height: rem(24)
    font-size: rem(10)
  .bulletin-wrapper
    position: relative
    height: rem(58)
    line-height: rem(58)
    padding: 0 rem(22) 0 rem(12)
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    background: rgba(7, 17, 27, 0.2)
    .bulletin-title
      display: inline-block
      vertical-align: top
      margin rem(16) rem(8) 0 0
      width: rem(44)
      height: rem(24)
      bg-image('bulletin')
      background-size: rem(44) rem(24)
      background-repeat: no-repeat
    .bulletin-text
      vertical-align: top
      margin: 0 rem(4)
      font-size: rem(24 )
    .icon-keyboard_arrow_right
      position: absolute
      font-size: 10
      right: rem(12)
      top: rem(8)
  .background
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    z-index: -1
    filter: blur(10px)
  .detail
    position: fixed
    top: 0
    left: 0
    z-index: 100
    width: 100%
    height: 100%
    overflow: auto
    transition: all 0.5s
    backdrop-filter: blur(10)
    &.fade-transition
      opacity: 1
      background: rgba(7, 17, 27, 0.8)
    &.fade-enter, &.fade-leave
      opacity: 0
      background: rgba(7, 17, 27, 0)
    .detail-wrapper
      min-height: 100%
      .detail-main
        margin-top: rem(128)
        padding-bottom: rem(128)
        .name
          line-height: rem(32)
          text-align: center
          font-size: rem(32)
          font-weight: 700
        .star-wrapper
          margin-top: rem(36)
          padding: rem(4) 0
          text-align: center
        .title
          display: flex
          width: 80%
          margin: 30px auto 24px auto
          .line
            display: flex
            position: relative
            top: -6px
            border:1px rgba(255,255,255,0.2) solid
          .text
            padding: 0 12px
            font-size: 14px

</style>
