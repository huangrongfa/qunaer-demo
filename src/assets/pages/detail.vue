<template>
  <section class="detail-warp">
    <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></Banner>
    <Detailhead></Detailhead>
    <detailList :detailList="detailList"></detailList>
  </section>
</template>
<script>
import Banner from './detail/compontents/banner'
import Detailhead from './detail/compontents/detailhead'
import detailList from './detail/compontents/list'
import axios from 'axios'
export default {
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      detailList: []
    }
  },
  components: {
    Banner,
    Detailhead,
    detailList
  },
  methods: {
    getinfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.requstdata).catch()
    },
    requstdata (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getinfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
