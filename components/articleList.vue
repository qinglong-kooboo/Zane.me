<template>
  <ul class="list">
    <li v-for="(item, index) in list" :key="index" class="article-item">
      <img :src="item.articleImg" alt="" class="article-img">
      <div class="article-info">
        <h4>{{ item.articleTitle }}</h4>
        <p class="article-des">{{ item.articleSubTitle }}</p>
        <div class="article-meta">
          <span class="date">{{ item.articleCreatedTime }}</span>
          <span class="view">{{ item.articleViewCount }}</span>
          <span class="comments">{{ item.articleComments }}</span>
          <span class="category">{{ item.articleCategory }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            articleImg: 'https://i.ibb.co/yFbNSFj/pic2.png',
            articleTitle: '2333333333',
            articleSubTitle: '233333333333333',
            articleCreatedTime: '2019/3/25',
            articleViewCount: 23,
            articleCommentCount: 5,
            articleComments: 'think'
          },
          {
            articleImg: 'https://i.ibb.co/yFbNSFj/pic2.png',
            articleTitle: '2333333333',
            articleSubTitle: '233333333333333',
            articleCreatedTime: '2019/3/25',
            articleViewCount: 23,
            articleCommentCount: 5,
            articleComments: 'think'
          },
          {
            articleImg: 'https://i.ibb.co/yFbNSFj/pic2.png',
            articleTitle: '2333333333',
            articleSubTitle: '233333333333333',
            articleCreatedTime: '2019/3/25',
            articleViewCount: 23,
            articleCommentCount: 5,
            articleComments: 'think'
          },
          {
            articleImg: 'https://i.ibb.co/yFbNSFj/pic2.png',
            articleTitle: '2333333333',
            articleSubTitle: '233333333333333',
            articleCreatedTime: '2019/3/25',
            articleViewCount: 23,
            articleCommentCount: 5,
            articleComments: 'think'
          }
        ]
      }
    }
  }

</script>
<style lang="scss" scoped>
  .list {
    .article-item {
      height: 9.5em;
      line-height: 9.5em;
      padding: .5em;
      background-color: #fff;
      font-size: 0;
      img {
        display: inline-block;
        vertical-align: top;
        width: 168px;
        height: 119px;
      }
      .article-info {
        display: inline-block;
        vertical-align: top;
        width: calc(100% - 168px);
        height: 119px;
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
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
</style>
