<template>
    <el-header style="text-align: right; font-size: 12px; background-color:#409EFF;">
      <el-dropdown @command="setDialogInfo">
        <i class="el-icon-setting" style="margin-right: 15px"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="safe">安全设置</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{user.build}} · {{user.name}} ({{user.identity}})</span>
    </el-header>
</template>

<script>
  export default {
    name: "Header",
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    methods: {
      setDialogInfo(cmdItem) {
        // console.log(cmdItem);
        switch (cmdItem) {
          case 'safe':
            this.safe()
            break
          case 'logout':
            this.logout()
            break
        }
      },
      safe() {
        this.$router.push("/safe")
      },
      logout() {
        // 清除token
        localStorage.removeItem('eleToken')
        // 设置vuex store
        this.$store.dispatch('clearCurrentState')
        // 跳转到login
        this.$router.push("/login")
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    width: 100%;
  }
</style>