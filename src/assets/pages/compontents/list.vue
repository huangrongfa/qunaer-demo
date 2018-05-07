<template>
  <div class="list" ref="scrollElement">
    <div class="">
      <div class="list-area">
        <div class="hot-adress">您的位置</div>
        <button type="button">{{this.city}}</button>
      </div>
      <div class="city-area">
        <div class="hot-city">热门城市</div>
        <ul class="hotcity-items">
          <li v-for="(items, index) in hot" :key="index" @click="headerClick(items.name)">{{items.name}}</li>
        </ul>
      </div>
      <div class="word-area">
        <div v-for="(items, key) of cities" :key="key" :ref="key">
          <div class="a-hot">{{key}}</div>
          <ul class="citys-group">
            <li v-for="(item, index) in items" :key="index" @click="headerClick(item.name)">{{item.name}}</li>
          </ul>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
// import headerVue from '../../../components/header.vue'
export default {
  props: {
    hot: Array,
    cities: Object,
    cityCrent: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scrollElement)
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
  watch: {
    cityCrent () {
      if (this.cityCrent) {
        const element = this.$refs[this.cityCrent][0]
        this.scroll.scrollToElement(element)
      }
      console.log(`监听的值：${this.cityCrent}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
.list
  position absolute
  top 80px
  right 0
  bottom 0
  left 0
  overflow hidden
.hot-adress
.hot-city
.a-hot
  height 34px
  line-height 34px
  font-size 14px
  padding-left 15px
  background-color #eee
.list-area
  margin-bottom 5px
  button[type="button"]
    width 25%
    padding 4px 10px
    background none
    border-radius 4px
    margin-left 15px
    margin-top 5px
.hotcity-items
  list-style none
  overflow hidden
  padding 0 15px
  margin-top 5px
  li
    float left
    width calc(28.33% - 15px)
    text-align center
    border solid 1px #ececec
    border-radius 4px
    padding 6px 10px
    font-size 12px
    margin-bottom 5px
    margin-right 15px
    &:nth-child(3n)
      margin-right 0
.word-area
  ul
    li
    position relative
      &:after
        display block
        content ""
        height 1px
        background-color #ececec
        position absolute
        width 100%
        transform scaleY(.5)
  .citys-group
    li
      height 28px
      line-height 28px
      text-indent 15px
      font-size 14px
</style>
