<template>
  <div class="headers">
    <header v-show="!isHide" :style="setStyle">
      <router-link to="/" class="iconfont" tag="span">&#xe610;</router-link>
      <span>世界花卉大观园</span>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isHide: true,
      setStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    showdetaile () {
      const iscroll = document.documentElement.scrollTop
      if (iscroll > 60) {
        let opacity = iscroll / 120
        opacity = opacity > 1 ? 1 : opacity
        this.setStyle = { opacity }
        this.isHide = false
      } else {
        this.isHide = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.showdetaile)
  },
  deactivated () {
    window.addEventListener('scroll', this.showdetaile) // 对全局事件解绑
  }
}
</script>
<style lang="stylus" scoped>
.headers
  header
    display flex
    position fixed
    top 0
    height 40px
    line-height 40px
    width 100vw
    background-color #00bcd4
    color #fff
    z-index 2
    transition .3s
  span:first-child
    width 30px
  span:last-child
    flex 1
    text-align center
</style>
