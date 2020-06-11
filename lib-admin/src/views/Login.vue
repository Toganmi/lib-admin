<template>
  <div>
    <div id="app">

      <vue-particles color="#409EFF" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4"
                     linesColor="#409EFF" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
                     :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"
                     class="particles-js"/>
    </div>
    <div class="border">
      <div class="text">系统登录</div>
      <el-input class="inputtext"
                placeholder="账号"
                v-model="account"
                clearable>
      </el-input>
      <form>
        <el-input class="inputtext" placeholder="请输入密码" v-model="password" show-password
                  @keyup.native.enter="loginClick"/>
      </form>

      <el-row>
        <el-button @click="loginClick" type="success" class="el-button">登录</el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      loginClick() {
        if (!this.account || !this.password) {
          alert('用户名或密码不能为空')
        } else if (this.account ==='admin' && this.password === 'admin') {
          this.$router.push('/obstaclemgt')
        } else {
          this.$message.error('账号或密码错误');
        }
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: "Hiragino Sans GB", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
    background-color: #FFFFFF;
  }

  .particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  body {
    line-height: 1.4;
  }

  .border {
    z-index: 99;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px;
    height: 290px;
    left: 50%;
    margin-left: -220px;
    margin-top: -180px;
    padding: 35px 40px 50px;
    position: absolute;
    top: 50%;
    width: 360px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .text {
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 26px;
    text-align: center;
    height: 40px;
  }

  .inputtext {
    margin-bottom: 30px;
  }

  .el-button {
    width: 360px;
  }

  .resetpw {
    bottom: 15px;
    color: #67C23A;
    position: absolute;
    right: 26px;
    text-decoration: none;
    font-size: 14px;
  }

  .router-link-active {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
</style>