<template>
  <div>
    <app-header />
    <background />
    <slot></slot>
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './header'
  import AppFooter from './footer'
  import Background from './background'
  export default {
    name: 'app-layout',
    components: {
      AppHeader,
      AppFooter,
      Background
    }
  }

</script>
<style lang="scss" scoped>

</style>
