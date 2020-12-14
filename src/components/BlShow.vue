<template>
  <div class="blShow">
      <BlItem v-for="(item,idx) in arrList" :key="idx" :itemObj="item"></BlItem>
      <div class="btnGroup">
          <button @click="prev">&lt;上一页</button>
          <button @click="next">下一页&gt;</button>
      </div>
  </div>
</template>

<script>
import BlItem from './BlItem'
export default {
  data () {
    return {
      arrList: [

      ],
      pageNum: 1
    }
  },
  components: {
    BlItem
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData (p = 1) {
      this.axios.get('/showBlog.php', {
        params: {
          page: p
        }
      }).then(res => {
        console.log(res)
        this.arrList = res.data
      })
    },
    prev () {
      if (this.pageNum == 1) {
        alert('已经是第一页了')
        return
      }
      this.pageNum--
      this.getData(this.pageNum)
    },
    next () {
      if (this.arrList.length < 9 || this.arrList.length == 0) {
        alert('已经是最后一页了')
        return
      }
      this.pageNum++
      this.getData(this.pageNum)
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="less" scoped>
    .blShow{
        padding: 50px 30px;
    }
    .btnGroup{
        padding: 20px 0;
        display: flex;
        justify-content: center;
        button{
            border: 1px solid #41B883;
            background-color: #fff;
            color:#41B883;
            font-size: 18px;
            margin: 0 10px;
            border-radius: 3px;
            padding: 5px 10px;
            cursor: pointer;
            transition: 0.3s;
            &:hover{
                background-color: #41B883;
                color: #fff;
            }
        }
    }
</style>
