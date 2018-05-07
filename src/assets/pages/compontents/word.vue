<template>
  <div class="word-list">
    <div class="word-warper">
      <span v-for="items of citygroup"
      :key="items"
      :ref="items"
      @click="handelClick"
      @touchstart.prevent="handeltouch"
      @touchmove="handelmove"
      @touchend="headelend">{{items}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    citykey: Object
  },
  data () {
    return {
      touchStatus: false,
      iTop: 0,
      timer: null
    }
  },
  updated () {
    this.iTop = this.$refs['A'][0].offsetTop
  },
  computed: {
    citygroup () {
      const cityarry = []
      for (let i in this.citykey) {
        cityarry.push(i)
      }
      return cityarry
    }
  },
  methods: {
    handelClick (e) {
      this.$emit('change', e.target.innerText) // 向父级组件派发一个自定义事件change
      // console.log(e.target.innerText)
    },
    handeltouch () {
      this.touchStatus = true
    },
    handelmove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 设置定时器，来做函数截流，减少handelmove执行频率，提升性能
          const touch = e.touches[0].clientY - 80
          const index = Math.floor((touch - this.iTop) / 20)
          console.log(index)
          // console.log(iTop)
          if (index >= 0 && index < this.citygroup.length) {
            this.$emit('change', this.citygroup[index])
          }
        }, 16)
      }
    },
    headelend () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.word-list
  position absolute
  top 80px
  bottom 0
  right 5px
  z-index 1
  width 14px
  display flex
  flex-direction column
  .word-warper
    margin auto
  span
    display block
    height 20px
    line-height 20px
    font-size 12px
    color #00bcd4
    text-align center
</style>
