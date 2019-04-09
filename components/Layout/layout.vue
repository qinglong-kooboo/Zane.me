<template>
  <div class="app-container">
    <app-header />
    <background />
    <div class="wrapper">
      <side-menu />
      <div class="content">
        <nuxt :nuxt-child-key="$route.name" keep-alive />
      </div>
      <side-bar />
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
    layoutTransition: 'layout',
    transition: {
      name: 'layout'
    },
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
  position: relative;
  height: 100%;
  & > .wrapper {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-top: $header-height;
    margin-bottom: 5em;
    & > .content {
      position: relative;
      width: 42.5em;
      padding: 1em 0 0 0;
      margin-left: 27em;
    }
  }
}
</style>
