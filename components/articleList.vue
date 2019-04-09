<template>
  <ul class="list">
    <li v-for="(item, index) in list" :key="index" class="article-item">
      <div class="article-img-wrapper">
        <nuxt-link :to="`/article/${item.articleId}`">
          <img :src="item.articleImg" alt="" class="article-img">
        </nuxt-link>
      </div>
      <div class="article-info">
        <h4>
          <nuxt-link :to="`/article/${item.articleId}`">
            {{ item.articleTitle }}
          </nuxt-link>
        </h4>
        <p class="article-des">
          {{ item.articleSubTitle }}
        </p>
        <div class="article-meta">
          <span class="date">
            <span class="iconfont">&#xe873;</span>{{ item.articleCreatedTime }}</span>
          <span class="view">
            <span class="iconfont">&#xe708;</span>{{ item.articleViewCount }}</span>
          <span class="comments">
            <span class="iconfont">&#xe68a;</span>{{ item.articleCommentCount }}</span>
          <span class="category">
            <span class="iconfont">&#xe602;</span>{{ item.articleCategory }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => {}
      }
    }
  }

</script>
<style lang="scss" scoped>
  .list {
    min-height: 9.5em;
    background-color: $background;
    .article-item {
      height: 9.5em;
      padding-left: .5em;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1em;
      transition: background-color .3s ease-in-out;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        background-color: $hoverground;
        img {
          width: 168px;
          height: 120px;
          transform: translateZ(0) scale(1.2, 1.2)
        }
      }
      .article-img-wrapper {
        width: 168px;
        height: 120px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          transition: transform 1s ease
        }
      }
      .article-info {
        width: calc(100% - 168px);
        margin-left: 1em;
        height: 100%;
        position: relative;
        h4 {
          line-height: 36px;
          transition: transform .3s ease-in-out;
          cursor: pointer;
          &:hover {
            transform: translateX(5px);
          }
        }
        .article-des {
          height: 5em;
          margin: 0 0 .3em;
          font-size: .9em;
          line-height: 1.8em;
          text-overflow: ellipsis;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
        }
        .article-meta {
          display: flex;
          align-items: center;
          height: 2em;
          width: 100%;
          color: $text;
          .date {
            flex: 1.5;
            .iconfont {
              font-size: 12px;
              margin-right: .5em;
            }
          }
          .view, .comments, .category {
            flex: 1;
            .iconfont {
              font-size: 12px;
              margin-right: .5em;
            }
          }
        }
      }
    }
  }
</style>
