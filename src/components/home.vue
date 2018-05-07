<template>
  <div class="container">
    <Indexheader></Indexheader>
    <Homeswiper :list='swiperList'></Homeswiper>
    <Icons :iconlist="iconList"></Icons>
    <Hot :hotlist="recommendList"></Hot>
    <Week :weeklist="weekendList"></Week>
  </div>
</template>
<script>
import Indexheader from '../components/header'
import Homeswiper from '../components/swiper'
import Icons from '../components/icons'
import Hot from '../components/hot'
import Week from '../components/week'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    Indexheader,
    Homeswiper,
    Icons,
    Hot,
    Week
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeinfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeinfoSucc)
    },
    getHomeinfoSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeinfo()
  },
  activated () { // 当页面重新显示的时候，要做的事情
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeinfo()
    }
  }
}
</script>
