<template>
  <div style="width: 100%;">
  <TopHeader/>
  <ViewShow/>
  </div>

</template>

<script>
  import TopHeader from "./topHeader/TopHeader";
  import ViewShow from "./viewshow/ViewShow";

  export default {
    name: "RightCotainer",
    components: {
      TopHeader,
      ViewShow
    }
  }
</script>

<style scoped>

</style>