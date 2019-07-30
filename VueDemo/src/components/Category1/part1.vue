<template>
  <div class="top-wrapper">
    <div class="topImg">
      <img :src="category1.topImg" alt="" />
    </div>
    <div class="topCate">
      <div class="topCate-content">
        <div class="topCate-item" v-for="(item, index) in category1.topCate" :key="index">
          <img :src="item.img" alt="">
          <div class="item-name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "category1",
  props: {
    category1: {
      type: Object
    }
  },
  data () {
    return {};
  }
}
</script>

<style>

</style>
