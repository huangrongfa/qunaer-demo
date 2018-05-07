<template>
  <section class="head">
    <div class="head-left"><span class="iconfont">&#xe610;</span></div>
    <div class="head-input"><input type="text" placeholder="请输入城市/景点/主题"></div>
    <router-link to="/city" tag="div">
      <div class="head-right">{{this.city}}<span class="iconfont">&#xe6aa;</span></div>
    </router-link>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
.head
  height 43px
  line-height 43px
  cursor default
  display flex
  background #00bcd4
  color #fff
  .head-left
    width 40px
    text-align center
  .head-input
    flex 1
    input[type='text']
      border-radius 4px
      padding 7px 0
      border none
      outline 0
      text-indent 10px
      width 100%
  .head-right
    width 65px
    font-size 14px
    text-align center

</style>
