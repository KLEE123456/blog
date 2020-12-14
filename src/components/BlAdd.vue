<template>
  <div class="blogAdd">
      <div class="addMain">
          <div class="row">
              <div class="text">博客标题：</div>
              <div class="iptBox">
                  <input type="text" placeholder="请输入标题..." v-model="blObj.title">
              </div>
          </div>
           <div class="row">
              <div class="text">作者：</div>
              <div class="iptBox iptBoxAuthor">
                  <input type="text" placeholder="请输入作者..." v-model="blObj.author">
              </div>
          </div>
           <div class="row">
              <div class="text">博客分类：</div>
              <div class="iptBox">
                  <select v-model="blObj.classify">
                      <option :value="item.classname" v-for="item in arrType" :key="item.id">{{item.classname}}</option>
                  </select>
              </div>
          </div>
          <div class="row rowArea">
              <div class="text">主题内容：</div>
              <div class="iptBox">
                 <textarea v-model="blObj.content"></textarea>
              </div>
          </div>
           <div class="row">
              <div class="text"></div>
              <div class="iptBox">
                 <button @click="submit">提交</button>
              </div>
          </div>
      </div>
      <div class="addShow" v-if="addShow">
          <h2>博客预览</h2>
          <BlItem :itemObj="blObj"></BlItem>
      </div>
  </div>
</template>

<script>
import BlItem from './BlItem'
export default {
  data () {
    return {
      blObj: {
        title: '',
        posttime: (new Date().getTime()) / 1000,
        classify: '',
        author: '',
        content: ''
      },
      arrType: [

      ]
    }
  },
  components: {
    BlItem
  },
  computed: {
    addShow () {
      if (this.blObj.title || this.blObj.classify || this.blObj.author || this.blObj.content) {
        return true
      }
      return false
    }
  },
  mounted () {
    this.axios.get('/classBlog.php').then(res => {
      this.arrType = res.data
    })
  },
  methods: {
    submit () {
      for (const item in this.blObj) {
        if (this.blObj[item] == '') {
          alert('请按要求填写数据')
          return
        }
      }
      this.axios.get('/addBlog.php', {
        params: this.blObj
      }).then(res => {
        if (res.data.code == 200) {
          alert('发布成功')
          this.$router.push('/show')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
    input,select,textarea{
        outline: none;
    }
    .blogAdd{
        padding: 50px 30px;
    }
    .addMain{
        padding: 0px 100px;
        .row{
            padding: 10px 0;
            display: flex;
            align-items: center;
            .text{
                width: 20%;
                text-align:right;
                font-size: 18px;
                color: #333;
            }
            .iptBox{
               width: 70%;
               padding: 0 20px;
               input,select,textarea,button{
                   width: 100%;
                   height: 30px;
                   border: 1px solid #41B883;
                   border-radius: 3px;
                   padding: 0px 10px;
                   font-size: 7px;
                   color: #666;
                   transition: 0.3s;
                   &:focus{
                       box-shadow: 0 0 15px rgba(65, 184, 131, 0.3);
                   }
               }
               select{
                   width: 50%;
               }
               textarea{
                   padding:10px;
                   height: 150px;
               }
               button{
                   width: 50%;
                   background-color: #41B883;
                   color: #fff;
                   cursor: pointer;
                   &:hover{
                       background-color: #2F6F52;
                   }
               }
            }
             .iptBoxAuthor input{
                   width: 50%;
               }
        }
        .rowArea{
            align-items: flex-start;
        }
    }
    .addShow{
        h2{
             border-top: 1px solid #999;
             padding: 60px 0 30px;
             text-align: center;
             color: #555;
             margin-top: 30px;
             font-size: 25px;
        }
    }
</style>
