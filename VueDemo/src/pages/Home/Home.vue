<template>
  <div>
    <!-- <div class="content-padding">Header</div> -->
    <v-header>
      <span slot="left-content"></span>

      <router-link slot="right-icon" tag="div" class="header-icon" to="/search">
        <i class="icon ion-ios-search"></i>
      </router-link>
      
    </v-header>
    <v-swiper></v-swiper>
    <v-firstCate :cate="cate"></v-firstCate>
    <v-moduleOne :cardOne="card[0]"></v-moduleOne>
    <v-moduleTwo :cardTwo="card1[0]"></v-moduleTwo>
    <v-moduleOne :cardOne="card[1]"></v-moduleOne>
    <v-moduleThree :cardThree="card2[0]"></v-moduleThree>
    <v-moduleThree :cardThree="card2[1]"></v-moduleThree>
    <v-moduleThree :cardThree="card2[2]"></v-moduleThree>
    <v-moduleOne :cardOne="card[2]"></v-moduleOne>
    <v-moduleOne :cardOne="card[3]"></v-moduleOne>
    
    <!-- <v-search></v-search> -->

    <!-- <div>Top</div>
    <div class="content-padding content">Container</div>-->
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Swiper from "@/components/Swiper/Swiper";
import FirstCate from "@/components/FirstCate/FirstCate";
import ModuleOne from "@/components/Custom/ModuleOne";
import ModuleTwo from "@/components/Custom/ModuleTwo";
import ModuleThree from "@/components/Custom/ModuleThree";
// import Search from "../../pages/Search/Search";

export default {
  name: "tab",
  components: {
    "v-header": Header,
    "v-swiper": Swiper,
    "v-firstCate": FirstCate,
    "v-moduleOne": ModuleOne,
    "v-moduleTwo": ModuleTwo,
    "v-moduleThree": ModuleThree
    // "v-search": Search
  },
  data() {
    return {
      cate: {
        // 从api获取
      },
      card: [],
      card1: [],
      card2: []
    };
  },
  created() {
    this.$http
      .get("https://www.easy-mock.com/mock/5ca495ffea0dc52bf3b67fdf/zgj/cate") //地址
      .then(res => {
        console.log(res);
        this.cate = Object.assign({}, res.data.data);
        console.log(this.cate);
      }),
    this.$http
      .get("https://www.easy-mock.com/mock/5ca495ffea0dc52bf3b67fdf/zgj/card")
      .then(res => {
        console.log(res);
        this.card = res.data.data;
      });
    this.$http
      .get("https://www.easy-mock.com/mock/5ca495ffea0dc52bf3b67fdf/zgj/card1")
      .then(res => {
        console.log(res);
        this.card1 = res.data.data;
      });
      this.$http
      .get("https://www.easy-mock.com/mock/5ca495ffea0dc52bf3b67fdf/zgj/card2")
      .then(res => {
        console.log(res);
        this.card2 = res.data.data;
      });
  }
};
</script>

<style lang="stylus">
.content
  width 100%
  // background-color red
</style>
