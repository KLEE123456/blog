<template>
  <div class="login">
      <div class="logo"></div>
      <div class="section">
          <div class="row1">
              <input type="text" name="userName" id="userName" placeholder="userName" v-model="loginObj.userName" autocomplete="off">
          </div>
          <div class="row2">
              <input type="password" name="userPwd" id="userPwd" placeholder="password" v-model="loginObj.userPwd" autocomplete="off">
          </div>
          <div class="row3">
              <div class="remember">
                  <input type="checkbox" id="remember" name="remember">
                  <label for="remember">Remember&nbsp;Me</label>
              </div>
              <div class="register">
                  <router-link to="/register">Register</router-link>
              </div>
          </div>
          <div class="row4">
              <input type="button" name="loginBtn" id="loginBtn" value="Login" @click="login">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loginObj:{
                userName:"",
                userPwd:"",
            }
        }
    },
    methods:{
        login(){
            for(var item in this.loginObj){
                if(this.loginObj[item]==""){
                    alert("用户名或密码不能为空！");
                    return;
                }
            }
            this.axios.get("http://47.111.9.83:8080/mblog/user/login.action?userName="+this.loginObj.userName+"&userPwd="+this.loginObj.userPwd).then(res=>{
                if(res.data==""){
                    alert("用户名或密码错误！");
                    return;
                }
                else{
                    this.$router.push("/home");
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .login{
        width: 100%;
        height: 100%;
        position: fixed;
        background: url(../assets/loginBg.png);
        display: flex;
        align-items: center;
        justify-content: center;
        .logo{
            width: 100px;
            height: 100px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            top: 70px;
            background: url(../assets/myLogo.png);
        }
        input{
            outline: none;
            border-radius: 3px;
        }
        .section{
            width: 500px;
            height: 300px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            .row1,.row2{
                width: 300px;
                height: 50px;   
                margin: 0 auto;
                margin-top: 30px;
                input{
                    width: 100%;
                    height: 100%;
                    border:1px solid rgba(255, 255, 255, 0.5);
                    background: rgba(255, 255, 255, 0.3);
                    font-size: 20px;
                    padding: 0px 10px;
                    color: rgba(255, 255, 255, 0.6);
                }
            }
            .row3{
                width: 300px;
                height: 25px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
                font-size: 15px;
                color: rgba(255, 255, 255, 0.5);
                a{
                     color: rgba(255, 255, 255, 0.5);
                }
                input{
                    width: 12px;
                    height: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    vertical-align: center;
                }
            }
            .row4{
                width: 300px;
                height: 50px;
                margin: 0 auto;
                margin-top: 40px;
                input{
                    width: 100%;
                    height: 100%;
                    background-color: #4971A5;
                    border: 1px solid #4971A5;
                    color:  rgba(247, 244, 244, 0.8);
                    font-size: 20px;
                    cursor: pointer;
                }
            }
        }
    }
</style>