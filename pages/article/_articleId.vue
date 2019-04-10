<template>
  <div class="wrapper">
    <div class="article">
      <h2 class="title">{{ article.title }}</h2>
      <div class="article-content">
        <img :src="article.picture" alt="">
        <p>{{ article.content }}</p>
      </div>
    </div>
    <comment-list :comments="comments" />
  </div>
</template>

<script>
  import CommentList from '../../components/commentList.vue'
  export default {
    validate({ params }) {
      return params.articleId && !isNaN(Number(params.articleId))
    },
    components: {
      CommentList
    },
    computed: {
      article() {
        return this.$store.state.article.article
      },
      comments() {
        return this.$store.state.comment.comments
      }
    },
    fetch({ store, params }) {
      return Promise.all([
        store.dispatch('article/getArticleDetail', params),
        store.dispatch('comment/getCommentList', params)
      ])
    }
  }
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: relative;
  .article {
    padding: 1em 2em;
    margin-bottom: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    .article-content {
      & > img {
        width: 527px;
        height: 186px;
        border: 6px solid #e1e1e1;
        border-radius: 2px;
        margin-bottom: 1em;
      }
    }
  }
}

</style>
