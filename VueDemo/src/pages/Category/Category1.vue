<template>
  <div>
    <div class="top-wrapper">
    <div class="topImg">
      <img src="http://edu-image.nosdn.127.net/3feccac4-f025-497e-b00e-f5bee6696671.jpg?imageView&quality=100"  alt="" />
    </div>
    <div class="topCate">
        <div class="topCate-item">
          <img class="itemImg" src="http://edu-image.nosdn.127.net/db28491d-6a6b-461b-ac1c-e017f0e81bc1.png?imageView&amp;quality=100&amp;thumbnail=56y56" alt="">
          <div class="item-name">数据分析</div>
        </div>
        <div class="topCate-item">
          <img class="itemImg" src="http://edu-image.nosdn.127.net/cc0a2904-51af-4dc0-9dd4-ccf8706d41e1.png?imageView&amp;quality=100&amp;thumbnail=56y56" alt="">
          <div class="item-name">人工智能</div>
        </div>
        <div class="topCate-item">
          <img class="itemImg" src="http://edu-image.nosdn.127.net/97ab6c18-a128-4447-add4-16f6eaa5b9a5.png?imageView&amp;quality=100&amp;thumbnail=56y56" alt="">
          <div class="item-name">技术开发</div>
        </div>
        <div class="topCate-item">
          <img class="itemImg" src="http://edu-image.nosdn.127.net/05a31d96-f972-40de-acb3-859980928be2.png?imageView&amp;quality=100&amp;thumbnail=56y56" alt="">
          <div class="item-name">设计&摄影</div>
        </div>
        <div class="topCate-item">
          <img class="itemImg" src="http://edu-image.nosdn.127.net/6c86436a-a020-4e58-bd5d-e03a9a876a39.png?imageView&amp;quality=100&amp;thumbnail=56y56" alt="">
          <div class="item-name">产品&运营</div>
        </div>
     
    </div>
    
    <v-moduleFour :cardFour="card3"></v-moduleFour>
    <v-moduleOne :cardOne="card[4]"></v-moduleOne>

    <div class="work-wrapper">
      <div class="work-title">
        我们的学员在这里工作
      </div>
      <div class="work-place">
        <img src="http://edu-image.nosdn.127.net/20ca861c-f8e9-4ff5-bad1-6249f6d984ba.png?imageView&amp;quality=100" alt="">
      </div>
    </div>
    
  </div>
  <!-- <v-moduleTwo :cardTwo="card1[1]"></v-moduleTwo> -->
  </div>
</template>

<script>
// import ModuleTwo from "@/components/Custom/ModuleTwo";
import ModuleFour from "@/components/Custom/ModuleFour";
import ModuleOne from "@/components/Custom/ModuleOne";
export default {
  components: {
    // "v-moduleTwo": ModuleTwo,
    "v-moduleFour": ModuleFour,
    "v-moduleOne": ModuleOne
  },
  data() {
    return {
      card3: {},
      card: []
      // card1:[]
    }
  },
  created() {
  //    this.$http
  //     .get("https://www.easy-mock.com/mock/5ca495ffea0dc52bf3b67fdf/zgj/card1")
  //     .then(res => {
  //       console.log(res);
  //       this.card1 = res.data.data;
  //     });

  this.$http
      .get("https://www.easy-mock.com/mock/5ca495ffea0dc52bf3b67fdf/zgj/card3") //地址
      .then(res => {
        console.log(res);
        this.card3 = Object.assign({}, res.data.data);
        console.log(this.card3);
      }),
     this.$http
      .get("https://www.easy-mock.com/mock/5ca495ffea0dc52bf3b67fdf/zgj/card")
      .then(res => {
        console.log(res);
        this.card = res.data.data;
      })
  }

};
</script>

<style lang="stylus" scoped>
.top-wrapper
  margin 0
  padding 0
  border-bottom 8px solid #F2F4F7
  .topImg
    height 4.8rem
    background-repeat no-repeat
    img 
      width 100%
      height 100%
  .topCate
    line-height 0.49333rem
    margin-bottom 0.21333fem
    padding-left 0.37333rem
    width 100%
    height 2.25333rem
    white-space nowrap 
    font-size 0
    // background-color red
    .topCate-item
        font-size 0.34667rem
        max-width 1.74667rem
        padding 0.42667rem 0.42667rem 0.42667rem 0
        text-align center
        text-decoration none
        overflow hidden
        display inline-block
        white-space nowrap 
        // border 1px solid red
        .itemImg
          width 0.74667rem
          height 0.74667rem
          display block
          margin 0 auto
          margin-bottom 0.16rem
  .work-wrapper
    margin 0
    bottom 0
    .work-title
      padding-left 0.13333333333333333rem
      width 9.813333333333333rem
      padding-top 0.6666666666666666rem
      min-height: 1.8933333333333333rem
      text-align center
      font-size 0.53333rem
      font-weight bold
    .work-place
      padding-top 0
      width 9.25rem
      // min-height 8.106666666666667rem
      padding-left 0.26666666666666666rem
      img 
        width 100%
        height 100%





</style>

