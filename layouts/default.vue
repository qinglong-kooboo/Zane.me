<template>
  <div class="main">
    <app-layout>
      <nuxt />
    </app-layout>
  </div>
</template>
<script>
  import AppLayout from '../components/Layout/layout'
  export default {
    components: {
      AppLayout
    }
  }
</script>

<style lang="scss" scoped>
.main {
  position: relative;
}
</style>
