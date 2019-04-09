<template>
  <div :key="$route.params.articleId" class="article">
    <h2 class="title">{{ article.title }}</h2>
    <div class="article-img-wrapper">
      <img :src="article.picture" alt="">
    </div>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
  export default {
    validate({ params }) {
      return params.articleId && !isNaN(Number(params.articleId))
    },
    transition: {
      name: 'module'
    },
    computed: {
      article() {
        return this.$store.state.article.article
      },
      articleId() {
        return Number(this.$route.params.articleId)
      }
    },
    fetch({ store, params }) {
      return store.dispatch('article/getArticleDetail', params)
    }
  }

</script>
<style lang="scss" scoped>
.article {
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .article-img-wrapper {
    width: 527px;
    height: 186px;
    margin-top: 1em;
    border: 6px solid #e1e1e1;
    border-radius: 2px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
