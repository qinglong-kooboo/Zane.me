<template>
  <div class="searchList">
    <div class="topShow">
      <img src="/imgs/search.svg" alt="" class="search-icon">
      <span class="text">和 “ {{ keyword }} ”有关的所有文章</span>
      <div class="background"></div>
    </div>
    <article-list :list="articles" />
  </div>
</template>

<script>
  import ArticleList from '../../components/articleList.vue'
  export default {
    validate({ params }) {
      return !!params.keyword
    },
    components: {
      ArticleList
    },
    computed: {
      keyword() {
        return this.$route.params.keyword
      },
      articles() {
        return this.$store.state.article.list
      }
    },
    fetch({ store, params }) {
      store.dispatch('article/getArticleList', params)
    }
  }
</script>
<style lang="scss" scoped>
.searchList {
  .topShow {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 11.5rem;
    margin-bottom: 1em;
    background-image: url('/imgs/service.jpg');
    background-size: 100% 130%;
    background-repeat: no-repeat;
    .search-icon {
      width: 5em;
      height: 5em;
      margin-bottom: 1.5em;
    }
    .text {
      color: #fff;
      font-weight: 700;
      font-size: 1.15em;
    }
    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, .5);
    }
  }
}
</style>
