<template>
  <div class="mainContent">
    <swiper :sliders="sliders.picSliders" />
    <div class="sliderTextWrapper">
      <div class="sliderTextIcon">
        <span class="iconfont">&#xe77e;</span>
      </div>
      <swiper :sliders="sliders.textSliders" />
    </div>
    <article-list :list="articles" />
  </div>
</template>

<script>
  import ArticleList from '../components/articleList.vue'
  import 'vue-zane-swiper/lib/swiper.css'
  export default {
    components: {
      ArticleList
    },
    computed: {
      sliders() {
        return this.$store.state.swiper.sliders
      },
      articles() {
        return this.$store.state.article.list
      }
    },
    fetch({ store }) {
      return Promise.all([
        store.dispatch('swiper/getSlidersData'),
        store.dispatch('article/getArticleList')
      ])
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
      flex: 0 1 60px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
}
</style>
