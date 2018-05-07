<template>
  <div class="pic-lengend">
        <ul>
          <li v-for="(list, index) of detailList" :key="index">
            <span class="title-bg"></span>
            {{list.title}}
            <div v-if="list.child">
                <detailList :detailList="list.child"></detailList>
            </div>
          </li>
        </ul>
  </div>
</template>
<script>
export default {
  name: 'detailList',
  props: {
    detailList: Array
  }
}
</script>
<style lang="stylus" scoped>
  .pic-lengend
    position relative
    border-top-left-radius 8px
    border-top-right-radius 8px
    top -12px
    background-color #fff
    ul
      margin 7px 16px
      list-style none
      li
        line-height 32px
        position relative
        font-size 14px
        color #666
        .title-bg
          background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) no-repeat
          height 20px
          width 20px
          display inline-block
          background-size cover
          vertical-align middle
        &:after
          display block
          content ""
          position absolute
          left 0
          width 100%
          height 1px
          background #ececec
</style>
