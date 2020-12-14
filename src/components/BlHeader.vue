<template>
  <div class="header">
      <div class="logo">
          <img src="@/assets/logo.png" alt="">
          <h1>
              VueJS
              <span>博客系统</span>
          </h1>
      </div>
      <div class="link">
          <router-link to="/show">博客列表</router-link>
          <router-link to="/add">添加博客</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
    .header{
        height: 80px;
        background: #41B883;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: #fff;
        .logo{
            display: flex;
            align-items: center;
            h1{
                font-weight: 400;
                font-size: 14px;
                span{
                    font-size: 20px;
                    display: block;
                    color: white;
                }
                margin-left: 10px;
                color:rgba(255, 255, 255, 0.6);
            }
            img{
                height: 60px;
            }
        }
        .link{
            display: flex;
            a{
                color:#fff;
                font-size: 18px;
                display: block;
                padding: 5px 20px;
                margin: 0 5px;
                border-radius: 5px;
                transition: 0.3s;
                &:hover,&.router-link-active{
                    background:#fff;
                    color: #41B883;
                }
            }
        }
    }
</style>
