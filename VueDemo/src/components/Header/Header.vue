<template>
  <div class="header">
    <div class="header-cont">
      <slot name="left-content"></slot>
    </div>

    <div class="header-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "hd",
  data() {
    return {};
  },
  methods: {
    // rightEvent() {}
  }
};
</script>

<style lang="stylus">

.header
  height 1.30667rem
  width 100%
  box-sizing border-box
  padding 0 .26667rem 0 .4rem
  background-color #fff
  text-align center
  display flex
  align-items center
  justify-content space-between

  &-cont
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    display: block;
    height: 0.64rem;
    width: 3.06667rem;
    margin-right: 0.21333rem;
    background: #fff url(//nos.netease.com/edu-image/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png?imageView&quality=100) center center no-repeat;
    background-size: contain;
  &-icon
    padding-right .53333rem;
    margin-left 0.08rem
    vertical-align middle
    font-size 0.4rem
    color #999
    line-height 1
    
</style>