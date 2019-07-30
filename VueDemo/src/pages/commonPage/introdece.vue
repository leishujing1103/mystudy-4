<template>
  <div class="introduce">
    <div class="header">
      <div class="detail">
        <div class="courseName">{{item.name}}</div>
        <div class="courseStatus">
          <div class="courseStar">{{item.icon}}</div>
          <div class="courseScore">{{item.score}}分</div>
          <div class="coursePerson">{{item.person}}人在学</div>
          <div class="spencial">{{item.special}}</div>
        </div>
      </div>
      <div class="price">
        <div class="nowPrice">￥{{price.nowPrice}}</div>
        <div class="oldPrice">￥{{price.oldPrice}}</div>
      </div>
    </div>
    <div class="desc">
      <div class="name">课程介绍</div>
      <div class="courseDesc">{{item.desc}}</div>
      <div class="courseImg">{{item.img}}</div>
      <div class="courseUse">
        <div class="usePerson">适用人群</div>
        <div class="useTxt">{{item.txt}}</div>
      </div>
    </div>
    <div class="lecturer">
      <div class="avatar">{{lecturer.avatar}}</div>
      <div class="lecturer">{{lecturer.name}}</div>
      <div class="resume">{{lecturer.resume}}</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
