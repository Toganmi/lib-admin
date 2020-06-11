<template>
  <el-aside width="200px" style="height: 100%; background-color: #fff; box-shadow:15px 0 10px -5px #eeeeee;">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"/>信息管理</template>
        <el-menu-item-group>
          <div class="el-menu-item-group__title" style="padding-top: -10px;
    margin-top: -20px;"></div>
          <el-menu-item index="1-1" @click="JumpToObstacle">信息管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: "MainAside",
    data() {
      return {

      }
    },
    methods: {
      JumpToObstacle() {
        this.$router.push('/obstaclemgt')
      },
      JumpToPerson() {
        this.$router.push('/personmgt')
      },
      JumpToSafe() {
        this.$router.push('/safe')
      },
    },
    computed: {

    }
  }
</script>

<style scoped>
  .el-menu-item-group__title {
    padding: 0;
    margin: 0;
  }
</style>