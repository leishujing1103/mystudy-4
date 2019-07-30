<template>
  <div>
    <div class="course-head">
      <img src="http://edu-image.nosdn.127.net/43e27d1e-021c-49e5-a7da-bae92cefb786.jpg?imageView&amp;quality=100&amp;crop=0_0_879_495&amp;thumbnail=450y250" alt="">
    </div>
    <div class="tab-wrapper">
      <div class="tab-item">
        <router-link to="/introduce">简介</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/cate">目录</router-link>
      </div>
      <div class="tab-item">
        <router-link to="evaluate">评价</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.course-head
  margin 0
  padding 0
  img 
    width 100%
    vertical-align top
.tab-wrapper
  display flex
  width 100%
  height 1.26666667rem
  margin 0 auto
  border-bottom 2px solid #F2F2F2
  
  .tab-item
    height 1.17333333rem
    text-align center
    line-height 1.17333333rem
    font-size 0.42666666rem
    width 32%
    text-decoration none
    color #333333
    text-decoration none

    
   


</style>

