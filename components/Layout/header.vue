<template>
  <div id="header">
    <nav class="navbar">
      <div class="header-con">
        <div class="header-con-left">
          <span class="navbar-blank"></span>
          <img src="../../assets/imgs/zane.jpg" alt="header-logo">
          <span class="slogan">每一个不曾起舞的日子，都是对生命的辜负</span>
        </div>
        <div class="header-con-right">
          1
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {

  }

</script>
<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 999;
  background-color: $header-bg-color;
  overflow: hidden;
  .navbar {
    width: 100%;
    height: $header-height;
    display: flex;
    justify-content: center;
    .header-con {
      width: $header-width;
      display: flex;
      justify-content: space-between;
      .header-con-left {
        width: 40em;
        display: flex;
        align-items: center;
        position: relative;
        img {
          width: 8rem;
          height: auto;
          margin-right: 4rem;
          filter: var(--theme-logo-rotate);
          user-select: none;
        }
        .navbar-blank {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          opacity: 0;
          animation: logo-blink 8s ease-in 1s infinite;
          &:before {
            content: '';
            width: 11rem;
            height: 3rem;
            position: absolute;
            top: 15%;
            left: 0;
            transform: rotate(-45deg);
            background: radial-gradient(white, rgba(255, 255, 255, .2), rgba(255, 255, 255, 0));
          }
          @keyframes logo-blink {
            0% {
              opacity: 0;
              transform: translateX(-10%);
            }
            5% { opacity: 1 }
            35% { opacity: 1 }
            39% { opacity: 0 }
            50% { opacity: .8 }
            60% { opacity: .8 }
            65% {
              opacity: .8;
              transform: translateX(100%);
            }
            70% {
              opacity: 0;
              transform: translateX(100%);
            }
            100% {
              opacity: 0;
              transform: translateX(100%);
            }
          }
        }
        .slogan {
          user-select: none;
          color: $primary;
        }
      }
      .header-con-right {
        width: 13em;
        background-color: $primary;
      }
    }
  }
}
</style>
