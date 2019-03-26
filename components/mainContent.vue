<template>
  <div class="mainContent">
    <no-ssr>
      <swiper />
    </no-ssr>
  </div>
</template>

<script>
  import swiper from './swiper.vue'
  export default {
    components: {
      swiper
    }
  }

</script>
<style lang="scss" scoped>
.mainContent {
  width: 42.5em;
  height: auto;
  background-color: #fff;
  margin-left: 13.5em;
}
</style>
