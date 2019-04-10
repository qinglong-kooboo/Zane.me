<template>
  <div class="global-background">
    <div class="backgroundImg"></div>
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
    .backgroundImg {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('/imgs/background.png');
      background-attachment:fixed;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      opacity: .4;
    }
  }
</style>
