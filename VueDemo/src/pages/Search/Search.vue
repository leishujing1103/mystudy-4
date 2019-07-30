<template>
  <div>
    <div class="search-box">
      <div class="search-input">
        <div class="input-box">
          <input type="text" />
        </div>
        <div class="search-btn">搜索</div>
      </div>
    </div>
    <div class="hot-keyword">
      <div class="keyword">
        <div class="keyword-txt">热门搜索</div>
        <ul class="keywords">
          <li class="click">通识阅读</li>
          <li class="click">高级java，升职加薪只需1课</li>
          <li class="click">UI设计师全链路培养计划</li>
          <li class="click">测试高级工程师，专家亲授</li>
          <li class="click">安卓高级开发，核心突破</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.search-box
  height 1.2rem
  position relative
  display block

  .search-input
    display flex
    height .90667rem
    background-color #f6f6f6
    padding .13333rem 0 .13333rem .4rem

    .input-box
      width 8rem

      input
        display block
        width 8rem
        margin-right .4rem
        background-color #fff
        border .02667rem solid #E6EAF2
        border-radius .45333rem
        // box-sizing border-box
        height .90667rem
        font-size .37333rem
        color #3c4a55
        // text-indent 0.8rem

  .search-btn
    font-size .4rem
    display block
    height .90667rem
    line-height .90667rem
    text-align center
    color #2cc17b
    flex 1

.hot-keyword
  margin 0
  .keyword
    background-color #fff
    padding 0.4rem
    .keyword-txt
      font-size 0.373737rem
      color #3c4a55
      line-height .4rem
      padding-bottom .05333rem
    .keywords
      padding-left 0.24rem
      .click
        padding 0.24rem 0.32rem
        font-size 0.37333rem
        line-height 0.37333rem
        margin 0.4rem 0.32rem 0 0
        border 0.02667rem solid #e6eaf2
        border-radius 0.45333rem
        max-width  100%
        display inline-block
        color #8891a7



</style>
