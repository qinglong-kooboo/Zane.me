<template>
  <div class="app-container">
    <app-header />
    <background />
    <div class="wrapper">
      <side-menu />
      <div class="content">
        <nuxt :nuxt-child-key="$route.name" keep-alive />
        <side-bar />
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './header'
  import AppFooter from './footer'
  import Background from './background'
  import SideMenu from './sideMenu'
  import SideBar from './sideBar'
  export default {
    name: 'app-layout',
    components: {
      AppHeader,
      AppFooter,
      Background,
      SideMenu,
      SideBar
    }
  }

</script>
<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  & > .wrapper {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-top: $header-height;
    & > .content {
      position: relative;
      width: 75em;
      height: 1000px;
      display: flex;
      justify-content: space-between;
      padding: 1em 0 0 0;
      margin-left: 27em;
    }
  }
}
</style>
