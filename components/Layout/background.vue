<template>
  <div>
    <div class="global-background">
      <img src="../../assets/imgs/background.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'background'
  }

</script>
<style lang="scss" scoped>
  .global-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #eee;
    img {
      position: fixed;
      width: 100%;
      height: 150%;
      opacity: .4;
    }
  }
</style>
