<template>
  <section class="hot-area">
    <div class="city-area">
      热销推荐
    </div>
    <!-- 列表 -->
    <ul class="list-group">
      <router-link
        :to="'/detail/'+ items.id" tag="li" class="list"
        v-for="(items, index) in hotlist"
        :key="index">
        <div class="pic-list">
          <img :src="items.imgUrl" alt="">
        </div>
        <div class="pic-info">
          <p>{{items.title}}</p>
          <p>
            <span class="iconfont icon-start">&#xe626;</span>
            <span class="iconfont icon-start">&#xe626;</span>
            <span class="iconfont icon-start">&#xe626;</span>
            <span class="iconfont icon-start">&#xe626;</span>
            <span class="iconfont icon-start">&#xe626;</span>
            <em style="margin-left:25px;font-style:normal;">{{items.total}}</em>条评论</p>
          <p><span style="color:#ff8300">{{items.money}}起</span><span>{{items.adress}}</span></p>
          <p style="font-size:12px">{{items.desc}}</p>
        </div>
      </router-link>
    </ul>
    <div class="more">查看所有产品</div>
  </section>
</template>
<script>
export default {
  props: {
    hotlist: Array
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
.hot-area
  overflow hidden
  .more
    text-align center
    height 38px
    line-height 38px
    color #00afc7
    font-size 14px
    cursor pointer
  .city-area
    height 36px
    line-height 36px
    background-color #eee
    text-indent 10px
    font-size 14px
  .list-group
    margin-left 12px
    margin-top 12px
    .list
      display flex
      position relative
      padding-bottom 10px
      margin-bottom 10px
      &:after
        display block
        content "";
        position absolute
        bottom 0
        height 1px
        width 100%
        background-color #ececec
        transform scaleY(.5)
    .list:last-child
        margin-bottom 0
      .pic-list
        box-sizing content-box
        img
          height 100px
          width 100px
      .pic-info
        padding-left 12px
        width 100%
        p:nth-of-type(1)
          margin-top 12px
          color #212121
        p:nth-of-type(2)
          margin-top 10px
          font-size 12px
          .icon-start
            color #ffb436
        p:nth-of-type(3)
          margin-top 12px
          display flex
          justify-content space-between
          font-size 12px
          margin-bottom 10px
          span:last-child
            color #616161
            padding-right 10px
</style>
