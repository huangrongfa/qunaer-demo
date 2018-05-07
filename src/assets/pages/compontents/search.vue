<template>
  <div class="search">
    <input type="text" name="" id="" placeholder="请输入城市名称或拼音" v-model="keyword">
    <div class="search-container" ref="search" v-show="keyword">
      <ul>
        <li v-for="items of list" :key="items.id" @click="headerClick(items.name)">
          {{items.name}}
        </li>
        <li v-show="isData">没有找到相关数据……^_^</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    isData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          console.log(i)
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    headerClick (city) {
      // this.$store.commit('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.Scroll = new BScroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
.search
  background-color #00bcd4
  padding 3px 6px
  input[type="text"]
    height 30px
    line-height 30px
    width 100%
    text-align center
    border-radius 4px
    border none
    padding 0 4px
    box-sizing border-box
    outline 0
  .search-container
    position absolute
    top 80px
    height 100%
    width 100%
    left 0
    z-index 2
    background-color #f5f5f5
    ul
      list-style none
      background-color #fff
      li
        height 28px
        line-height 28px
        font-size 14px
        position relative
        padding-left 15px
        &:after
          display block
          content ""
          position absolute
          bottom 0
          left 0
          width 100%
          height 1px
          background #ececec
</style>
