<template>
  <section class="hot-area">
    <div class="city-area">
      周末去哪儿
    </div>
    <!-- 列表 -->
    <ul class="list-group">
      <li class="list" v-for="(item, index) in weeklist" :key="index">
        <img class="img-responsive" :src="item.imgUrl" alt="">
        <div class="img-plane">
          <p class="img-planeinfo">{{item.title}}</p>
          <p class="img-planedse">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    weeklist: Array
  },
  data () {
    return {
      weeklistDate: [{}]
    }
  }
}
</script>
<style lang="stylus" scoped>
.hot-area
  overflow hidden
  .city-area
    height 36px
    line-height 36px
    background-color #eee
    text-indent 10px
    font-size 14px
  .list
    .img-responsive
      width 100%
      display block
      max-width 100%
      height auto
    .img-plane
      padding 10px 8px
      .img-planeinfo
        font-size 14px
      .img-planedse
        font-size 12px
        color #616161
        margin-top 8px
</style>
