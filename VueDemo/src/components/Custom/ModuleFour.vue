<template>
  <div>
    <div class="freeList">
      <div class="freeList-title">{{cardFour.title}}</div>
      <div class="freeList-item" v-for="(item, index) in cardFour.list" :key="index">
        <div class="item-logo">
          <img :src="item.img" alt="">
        </div>
        <div class="item-body">
          <div class="body-status">
            <div class="status-time">{{item.time}}</div>
            <button type="submit" class="remind">开启提醒</button>
          </div>
          <div class="body-container">{{item.container}}</div>
          <div class="body-lector">{{item.lector}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card3",
  props: {
    cardFour: {
      type: Object,
      default: {
        name: '加载中',
        list: () => {
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
.freeList
  margin 0
  padding 0
  border-bottom 8px solid #F2F4F7
  .freeList-title
    font-size 0.45333rem
    margin 0.53333rem 0 0 0.42667rem
    font-weight bold
  .freeList-item
    padding 0.53333rem 0 0 0.42667rem
    .item-logo
      float left
      margin-right 0.42667rem
      img 
        width 1.92rem
        border-radius 1.92rem
    .item-body
      padding-right 0.42667rem
      .body-status
        height 0.74667rem
        display inline-block
        .status-time
          line-height 0.74667rem
          font-size 0.37333rem
          margin-right 3.2rem
          // box-sizing border-box
          float left 
          
        .remind
          width 1.92rem
          line-height 0.74667rem
          border-radius 0.37333rem
          border 1px solid #36b378 
          color #36b378
          text-align center
          box-sizing border-box
          float right
          height 0.74667rem
          font-size 0.32rem
          background-color white
      .body-container
        font-size 0.42667rem
        margin-top 0.21333rem
        overflow hidden
        line-height  0.58667rem
      .body-lector
        font-size 0.32rem
        color #999
        margin-top 0.21333rem
        margin-bottom 0.53333rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        padding-left 2.34667rem


</style>

