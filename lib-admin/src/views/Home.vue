<template>
  <el-container style="height:1000px; border: 1px solid #eee">
    <main-aside/>
    <right-cotainer/>
  </el-container>
</template>

<script>
// @ is an alias to /src
import TopHeader from "../components/topHeader/TopHeader";
import MainAside from "../components/mainAside/MainAside";
import RightCotainer from "../components/RightCotainer";
export default {
  name: 'Home',
  components: {
    RightCotainer,
    MainAside
  }
}
</script>
