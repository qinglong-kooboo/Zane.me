<template>
  <div>
    <div class="header-fake"></div>
    <div class="wrapper">
      <side-menu />
      <div class="content">
        <main-content />
        <side-bar />
      </div>
    </div>
  </div>
</template>

<script>
  import SideMenu from '../components/sideMenu'
  import MainContent from '../components/mainContent'
  import SideBar from '../components/sideBar'

  export default {
    components: {
      SideMenu,
      SideBar,
      MainContent
    }
  }
</script>
<style lang="scss" scoped>
.header-fake {
  width: 100%;
  height: $header-height;
  background-color: $header-bg-color;
}
.wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  & > .content {
    position: relative;
    width: $container-width;
    height: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 1em 0 0 0;
  }
}
</style>
