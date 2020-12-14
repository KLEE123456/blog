<template>
  <div class="blItem">
          <div class="top">
              <h2>
                  {{reStrLen(itemObj.title,5)}}
                  <!-- {{itemObj.title|fReStrLen(5)}} -->
              </h2>
              <div class="time">
                  {{myDate(itemObj.posttime,1)}}
                  <!-- {{itemObj.posttime|fMyDate(1)}} -->
              </div>
          </div>
          <div class="content">
              {{itemObj.content}}
          </div>
          <div class="info">
              <div class="list">所属分类：<span>{{itemObj.classify}}</span></div>
              <div class="author">作者：<span>{{itemObj.author}}</span></div>
          </div>
      </div>
</template>

<script>
import common from '@/assets/js/common'
export default {
  props: {
    itemObj: {
      type: Object,
      default () {
        return { title: '123', posttime: '12121212121' }
      }
    }
  },
  methods: {
    reStrLen (val, len) {
      return common.ReStrLen(val, len)
    },
    myDate (dt, type) {
      return common.myDate(dt, type)
    }

  },
  filters: {
    fReStrLen (val, len) {
      return common.ReStrLen(val, len)
    },
    fMyDate (dt, type) {
      return common.myDate(dt, type)
    }
  }
}
</script>
<style lang="less" scoped>
    .blItem{
        padding: 30px 0;
        .top{
            display: flex;
            justify-content:space-between;
            align-items: center;
            h2{
                font-size: 25px;
                color: #333;
            }
            .time{
                font-size: 14px;
                color: #666;
            }
        }
        .content{
            background-color: #e0dbdb;
            margin: 10px 0 15px;
            padding: 10px 10px;
            border-radius: 5px;
            color: #333;
            font-size: 16px;
            line-height: 1.8em;
        }
        .info{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            color: #888;
            span{
                font-size: 16px;
                color: #444;
            }
        }
    }
</style>
