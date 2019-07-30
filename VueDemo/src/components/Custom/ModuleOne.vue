<template>
  <div class="moduleOne-wrapper">
    <div class="module-top">
      <div class="top-name">{{cardOne.name}}</div>
    </div>
    <router-link to="/commonPage2">
      <div class="module-card" v-for="(item, index) in cardOne.lesson" :key="index">
        <img :src="item.img" alt="">
        <div class="card-desc">{{item.desc}}</div>
        <div class="card-detail" v-show="detail">{{item.detail}}</div>
      </div>
    </router-link>
    

  </div>
  
</template>

<script>
export default {
  props: {
    cardOne: {
      type: Object,
      default: {
        name: '加载中',
        lesson: () => {
          return []
        }
      }
    }
  },
  data () {
    
    return {
     card:{},
     detail: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.moduleOne-wrapper
  
  display table
  margin 0 auto
  padding-top 0.53333rem
  border-bottom 14px solid #F2F4F7
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
  .module-card
    display block
    width 92%
    padding-left 3.5%
    // clear both
    // height 0
    // overflow hidden
    width 4.48rem
    margin-bottom 0.6rem
    
    float left 
    img 
      width 100%
      height 2.533333rem
    .card-desc
      margin-top 0.2rem
      font-size 16px
      line-height 22px
      color #3c4a3c
      overflow hidden
      text-overflow ellipsis
    .card-detail
      width 100%
      max-height 0.8rem
      margin-top 0.16rem
      font-size 0.32rem
      line-height 0.38667rem
      color #999999
      text-align left


</style>
