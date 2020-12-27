<template>
  <div class="uAdd">
      <div class="section">
          <div class="logo">

          </div>
          <div class="row1">
            <span>userName：</span>
            <input type="text" id="userName" name="userName" v-model="userObj.userName" @blur="regChk" autocomplete="off">
          </div>
          <div class="row2">
            <span>password：</span>
            <input type="password" id="userPwd" name="userPwd" v-model="userObj.userPwd" autocomplete="off">
          </div>
          <div class="row3">
            <span>*password：</span>
            <input type="password" id="userPwd1" name="userPwd1" v-model="userObj.userPwd1" autocomplete="off">
          </div>
          <div class="row4">
            <input type="button" id="btn" name="btn" value="Register" @click="reg" ref="sBtn">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userObj: {
        userName: '',
        userPwd: '',
        userPwd1: ''
      }
    }
  },
  methods: {
    regChk () {
      this.axios.get('http://47.111.9.83:8080/mblog/user/chkReg.action?userName=' + this.userObj.userName).then(res => {
        if (res.data != '') {
          alert('用户名已被注册，请修改！')
          this.$refs.sBtn.disabled = true
        } else {
          this.$refs.sBtn.disabled = false
        }
      })
    },
    reg () {
      for (var item in this.userObj) {
        if (this.userObj[item] == '') {
          alert('用户名或密码不能为空！')
          return
        }
      }
      if (this.userObj.userPwd != this.userObj.userPwd1) {
        alert('密码输入不一致！')
        return
      }
      this.axios.get('http://47.111.9.83:8080/mblog/user/reg.action?userName=' + this.userObj.userName + '&userPwd=' + this.userObj.userPwd).then(res => {
        if (res.data > 0) {
          alert('注册成功！')
          this.$router.push('/login')
        } else {
          alert('注册失败，请与管理员联系！')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
    .uAdd{
      width: 100%;
      height: 100%;
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      .section{
        width: 500px;
        height: 500px;
        border: 2px solid gray;
        box-shadow: 0 0 20px rgba(65, 184, 131, 0.3);
        padding: 25px 0px;
        border-radius: 3px;
        .logo{
          width: 100px;
          height: 100px;
          border: 2px solid grey;
          border-radius: 50%;
          margin: 0 auto;
          background: url(../assets/myLogo.png) no-repeat;
        }
        .row1,.row2,.row3{
          width:400px;
          height: 40px;
          margin: 0 auto;
          text-align: center;
          margin-top: 35px;
          line-height: 40px;
          font-size: 16px;
          color: rgb(124, 121, 121);
          input{
              outline: none;
              border-radius: 3px;
              border:1px solid white;
              background:rgba(203, 211, 203, 0.4);
              padding: 5px 5px;
              font-size: 20px;
              color: rgba(121, 112, 112, 0.8);
          }
        }
        .row4{
            width: 400px;
            height: 40px;
            margin: 0 auto;
            margin-top: 20px;
            input{
              width: 100%;
              height: 100%;
              outline: none;
              background:rgba(231, 229, 229, 0.8) ;
              color: rgba(121, 112, 112, 0.8);
              font-size: 18px;
              cursor: pointer;
              border: 2px solid rgba(201, 196, 196, 0.8);
              border-radius: 3px;
            }
        }
      }
    }

</style>
