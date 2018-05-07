<template>
  <section class="icon-area">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <ul>
          <li v-for="items in page" :key="items.id">
            <img :src="items.imgUrl"/>
            <p>{{items.desc}}</p>
          </li>
        </ul>
      </swiper-slide>
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    </swiper>
  </section>
</template>
<script>
export default {
  props: {
    iconlist: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8)
        console.log(page)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
.icon-area >>> .swiper-container
  height 0
  overflow hidden
  padding-bottom 50%
  ul
    font-size 0
    margin-top 8px
    height 0
    li
      width 25%
      font-size 14px;
      text-align center
      display inline-block
      color #666
      img
        width 55px
        height 55px
      p
        margin-top 8px
        margin-bottom 8px
</style>
