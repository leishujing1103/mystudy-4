<template>
  <div class="footer-guide-wrapper retina-border-top">
    <router-link tag="div" to="/home" class="footer-item" active-class="foot-item-selected">
      <div class="icon">
        <i class="icon ion-ios-home"></i>
      </div>
      <p>首页</p>
    </router-link>
    <router-link tag="div" to="/study" class="footer-item" active-class="foot-item-selected">
      <div class="icon">
        <i class="icon ion-ios-book"></i>
      </div>
      <p>我的学习</p>
    </router-link>
    <router-link tag="div" to="/account" class="footer-item" active-class="foot-item-selected">
      <div class="icon">
        <i class="icon ion-ios-person"></i>
      </div>
      <p>账号</p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.foot-item-selected
  color #515151 !important 

.footer-guide-wrapper
  display flex
  justify-content space-around
  height 1.28rem
  color #bfbfbf
  background-color #fff

  .footer-item
    display flex
    flex-direction column
    align-items center
    justify-content center
    .icon
      line-height 1
      font-size .7rem
    p
      font-size: 0.26667rem;
</style>
