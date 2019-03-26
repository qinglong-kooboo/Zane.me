<template>
  <footer id="footer">
    <div class="footer-con">
      <span footer-con-text>
        美丽的鸽子，鸽子，我喜欢你
      </span>
    </div>
  </footer>
</template>

<script>
  export default {

  }

</script>
<style lang="scss" scoped>
#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(#fff, 0.6);
  .footer-con {
    width: $container-width;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2em;
    .footer-con-text {
      padding: 1em;
      font-size: .9em;
      text-align: center;
      text-transform: uppercase;
      color: $primary;
    }
  }
}
</style>
