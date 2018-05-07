<template>
  <div class="moadel-content">
    <div class="baner">
      <div class="img-box" @click="handelShow">
        <router-link to="/" class="iconfont return" tag="span">&#xe610;</router-link>
        <img class="pictuer" :src="this.bannerImg" alt="">
        <div class="img-info">
        {{this.sightName}}
        </div>
      </div>
    </div>
    <Graller :imgs="imgs" v-show="isShow" @closeModal="closeModalPrent"></Graller>
  </div>
</template>
<script>
import Graller from 'common/graller'
export default {
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      isShow: false,
      imgs: [
        'https://imgs.qunarzz.com/piao/fusion/1804/58/783c2cbad57c7d02.jpg',
        'https://imgs.qunarzz.com/piao/fusion/1804/d6/a81720180bd22c02.jpg'
      ]
    }
  },
  components: {
    Graller
  },
  methods: {
    handelShow () {
      this.isShow = true
    },
    closeModalPrent () {
      this.isShow = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.baner
  .img-box
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .pictuer
      width 100%
    .img-info
      position absolute
      bottom 15px
      left 0
      right 0
      text-shadow 0 1px 2px rgba(0,0,0,0.70)
      height 30px
      line-height 30px
      text-indent 15px
      font-size 14px
      color #fff
    .return
      position absolute
      left 10px
      width 28px
      height 28px
      background rgba(0,0,0,.5)
      text-align center
      line-height 28px
      color #fff
      border-radius 50%
      top 10px

</style>
