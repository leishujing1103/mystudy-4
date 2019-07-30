<template>
  <div class="moduleTwo-wrapper">
    <div class="module-top">
      <div class="top-name">{{cardTwo.name}}</div>
    </div>
    <div class="module-card" v-for="(item, index) in cardTwo.lesson" :key="index">
      <img :src="item.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
   props: {
    cardTwo: {
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

    }
  }  
}
</script>

<style lang="stylus" scoped>
.moduleTwo-wrapper
  margin 0 auto
  padding-top 0.53333rem
  padding-bottom 0.5rem
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
    width 9.2rem
    // margin-bottom 11px
    
    img 
      width 100%
      height 3.62667rem
      padding-left 4%
      padding-bottom 4px
</style>
