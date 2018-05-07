<template>
  <section class="city-warper">
    <cityHead></cityHead>
    <Search :cities="cities"></Search>
    <Citylist :hot="hotCities" :cities="cities" :cityCrent="cityCrent"></Citylist>
    <Word :citykey="cities" @change="changeHandel"></Word>
  </section>
</template>
<script>
import axios from 'axios'
import cityHead from './compontents/cityhead'
import Search from './compontents/search'
import Citylist from './compontents/list'
import Word from './compontents/word'
export default {
  components: {
    cityHead,
    Search,
    Citylist,
    Word
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      cityCrent: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const resData = res.data
        this.hotCities = resData.hotCities
        this.cities = resData.cities
        // console.log(this.cities)
      }
    },
    changeHandel (e) {
      // console.log(`值是:${e}`)
      this.cityCrent = e
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped></style>
