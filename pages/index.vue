<template>
  <div class="mainContent">
    <!-- <swiper :sliders="sliders.picSliders" /> -->
    <slider :sliders="sliders.picSliders" />
    <div class="sliderTextWrapper">
      <div class="sliderTextIcon">
        <span class="iconfont">&#xe77e;</span>
      </div>
      <slider :sliders="sliders.textSliders" />
    </div>
    <article-list />
  </div>
</template>

<script>
  import Slider from '../components/swiper.vue'
  import ArticleList from '../components/articleList.vue'
  // import 'vue-zane-swiper/lib/swiper.css'
  export default {
    components: {
      ArticleList,
      Slider
    },
    computed: {
      sliders() {
        return this.$store.state.swiper.sliders
      }
    },
    fetch({ store }) {
      return store.dispatch('swiper/getSlidersData')
    }
  }
</script>
<style lang="scss" scoped>
.mainContent {
  .sliderTextWrapper {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    background: linear-gradient(to right,#AAAAAA, #fff);
    color: #fff;
    .sliderTextIcon {
      flex:  0 1 60px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
}
</style>
