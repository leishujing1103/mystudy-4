<template>
  <div id="app">
    <router-view />
    <footer-guide class="footer-guide" />
    
  </div>
</template>

<script>
import FooterGuide from "./components//FooterGuide/FooterGuide";

export default {
  name: "App",
  components: { 
    FooterGuide,
  
  }
};
</script>

<style lang="stylus">
@import './mixin/index.styl'

*
  margin 0
  padding 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height 100%
  width 100%

  .footer-guide
    left 0
    right 0
    position fixed
    bottom 0

  
</style>
