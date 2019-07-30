<template>
  <div class="moduleThree-wrapper">
    <div class="module-top">
      <div class="top-name">{{cardThree.name}}</div>
    </div>
    <div class="module-card-special">
      <img :src="cardThree.special.bigImg" alt class="bigImg"/>
      <div class="card-desc">{{cardThree.special.desc}}</div>
      <div class="price">{{cardThree.special.price}}</div>
    </div>
    <div class="module-card" v-for="(item, index) in cardThree.lesson" :key="index">
      <img :src="item.smallImg" alt class="smallImg"/>
      <div class="card-desc">{{item.desc}}</div>
      <div class="price">{{item.price}}</div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardThree: {
      type: Object,
      default: {
        name: "加载中",
        lesson: () => {
          return []
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.moduleThree-wrapper
  display table
  margin 0 auto
  padding-top 0.53333rem
  padding-bottom 0.5rem
  border-bottom 14px solid #F2F4F7
  // padding-left 4%
  .module-top
    height 21px
    margin-bottom 0.4rem
    display block
    .top-name
      float left 
      display inline-block
      padding-left 4%
      line-height 21px
      font-size 17px
      font-weight bold
      color #3c4a55
  .module-card-special
    width 9.2rem
    margin-bottom 0.6rem
    padding-left 3.5%
    .bigImg
      width 100%
      height 3.94667rem
    .card-desc
      font-size 16px
      line-height 22px
      color #3c4a55
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .price
      margin-top 0.16rem
      font-size 16px
      line-height 18px
      color #ff632a
  .module-card
    display block
    width 4.48rem
    margin-bottom 0.6rem
    // width 92%
    padding-left 3.5%
    float left 
    
    .smallImg 
      width 4.48rem
      height 2.533333rem
    .card-desc
      font-size 16px
      line-height 22px
      color #3c4a55
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .price
      margin-top 0.16rem
      font-size 16px
      line-height 18px
      color #ff632a
      
      // float left
    
    
</style>
