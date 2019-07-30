<template>
  <div class="cate-wrapper">
    <div class="cate-content">
      <div class="icon-box">
        <div class="icon-cell" v-for="(item, index) in cate.cate" :key="index">

          <router-link to="/category1">
            <div class="icon-round">
              <img :src="item.img" alt />
            </div>
            <div class="icon-txt">{{item.txt}}</div>
          </router-link>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "cate",
  components: {

  },
  props: {
    cate: {
      type: Object
    }
  },
  methods: {
    // goTo(cate) {
    //   this.$router.push({path: '../../pages/category/Category1.vue', query: {id: cate.id}});
    // }
  },
  data() {
    return {

    };
  },
  mounted() {
    setTimeout(() => {
      console.log(this.cate.cate);
    }, 1000);
  }
};
</script>

<style lang="stylus" scoped>
.cate-wrapper
  padding 0
  margin 0

  .cate-content
    padding-bottom .70667rem
    border-bottom 14px solid #F2F4F7

    .icon-box
      display inline-block
      margin-left 4%
      width 92%

      // font-size 0
      .icon-cell
        display inline-block
        width 25%
        margin-top .53333rem

        .icon-round
          margin 0 auto
          width 92%
          line-height 1.01333rem
          width 1.01333rem
          height 1.01333rem
          color #ffffff
          text-align center

          img
            width 100%
            height 100%

        .icon-txt
          margin-top .21333rem
          text-align center
          font-size 14px
</style>
