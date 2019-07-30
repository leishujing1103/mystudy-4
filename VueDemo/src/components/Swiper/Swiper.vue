<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../static/images/slider01.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/slider02.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../static/images/slider03.png" alt />
        </div>
      </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import Swiper from "swiper";
export default {
  data () {
    return {

    }
  },
   mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true
    });
  }
}
</script>

<style lang="stylus">
.swiper-container
  width 100%
  margin 0
  padding 0
  .swiper-wrapper
    height 4.6133333333rem
    .swiper-slide
      text-align center
      background-color #fff
      display flex
      justify-content center
      img
        display block
        width 100%
        height 100%


</style>
