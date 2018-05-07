<template>
  <div class="dailog-modal" @click="closeModal">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(image, index) in imgs" :key="index">
          <img :src="image" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>
<style lang="stylus" scoped>
.dailog-modal
  position fixed
  height 100vh
  width 100vw
  display flex
  flex-direction column
  justify-content center
  left 0
  top 0
  background-color #000
  align-items center
  img
    width 100%
  .swiper-pagination-fraction
    color #fff
    width 50%
</style>
