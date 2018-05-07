<template>
  <section class="pictuer-content">
    <swiper :options="swiperOption" v-if="showswiper">
    <!-- slides -->
    <swiper-slide v-for="items in list" :key="items.uid">
      <img class="img-contor" :src="items.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </section>
</template>
<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
      }
    }
  },
  computed: {
    showswiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.pictuer-content >>> .swiper-pagination-bullet-active
    background #fff !important
.pictuer-content
  height 0
  overflow hidden
  padding-bottom 30%
  background-color #eee
  .img-contor
    width 100%
    height 100%
</style>
