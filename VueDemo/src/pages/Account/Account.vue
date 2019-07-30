<template>
    <div class="account-wrapper">
        <div class="account-top">
            <div class="top-avatar">
                <i class="icon ion-ios-contact"></i>
                <a href="#" class="content">登录/注册</a>
            </div>

        </div>
        <div class="item-wrapper">
            <div class="setting-item">
                <span >
                    <img class="item-icon" src="../../assets/money.png" alt="">
                </span>
                <span class="item-text">我的订单</span>
                <span >
                    <img class="more" src="../../assets/more.png" alt="" >
                </span>
            </div>
            <div class="setting-item">
                <span >
                    <img class="item-icon" src="../../assets/money.png" alt="">
                </span>
                <span class="item-text">我的订单</span>
                <span >
                    <img class="more" src="../../assets/more.png" alt="" >
                </span>
            </div>
            <div class="setting-item">
                <span >
                    <img class="item-icon" src="../../assets/money.png" alt="">
                </span>
                <span class="item-text">我的订单</span>
                <span >
                    <img class="more" src="../../assets/more.png" alt="" >
                </span>
            </div>
            <div class="setting-item">
                <span >
                    <img class="item-icon" src="../../assets/money.png" alt="">
                </span>
                <span class="item-text">我的订单</span>
                <span >
                    <img class="more" src="../../assets/more.png" alt="" >
                </span>
            </div>
            <div class="setting-item">
                <span >
                    <img class="item-icon" src="../../assets/money.png" alt="">
                </span>
                <span class="item-text">我的订单</span>
                <span >
                    <img class="more" src="../../assets/more.png" alt="" >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.account-top
    display flex 
    width 100%
    height 2.08rem
    box-sizing border-box
    padding 0.37333rem 0 0.37333rem 0.32rem
    line-height 1.33333rem
    background #fff
    .top-avatar
        // width 1.33333rem
        height 1.5rem
        text-align left
        
        margin-right 0.32rem
        .icon
            width 1.5rem
            height 1.5rem
            margin-right 0.32rem

    .content
        vertical-align middle
        font-size 0.42667rem
        margin-left 0.32rem
        line-height 1.33333rem
.item-wrapper
    margin 0
    padding 0
    .setting-item
        // width 10rem
        height 1.33333rem
        line-height 0.53333rem
        font-size 0.4rem
        // color #333333
        box-sizing border-box
        padding 0.4rem 0
        margin-left 1.13333rem
        width 8.86667rem
        border-bottom 1px solid #DDDDDD
        .item-icon
            color #999999
            display inline-block
            vertical-align -2px
            width 0.455rem
            height 0.455rem
            margin-left -0.74667rem
            margin-right 0.2rem
            line-height 1rem
        .more
            width 0.4rem
            height 0.4rem
            margin-right 0.32rem
            margin-top 0.05333rem
            float right   
            // line-height 1
            

        


</style>
