<template>
  <ul class="rank-article">
    <li v-for="(item, index) in list" :key="index" class="rank-article-item">
      <span class="rankNo">{{ ++index }}</span>
      <nuxt-link :to="`/article/${item.articleId}`" class="rank-article-title">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      list() {
        return this.$store.state.rankList
      }
    }
  }

</script>
<style lang="scss" scoped>
.rank-article {
  padding: .5em;
  .rank-article-item {
    width: 100%;
    height: 1.9em;
    padding: 0 .5em;
    display: flex;
    align-items: center;
    margin-bottom: .5em;
    overflow: hidden;
    .rankNo {
      width: 1.4em;
      height: 1.4em;
      line-height: 1.4em;
      margin-right: .8em;
      box-sizing: border-box;
      text-align: center;
      font-size: .75rem;
      background-color: $input-hover;
    }
    .rank-article-title {
      max-width: 14em;
      font-size: .8rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      transition: transform .2s ease;
      cursor: pointer;
      &:hover {
        color: #1c1d1f;
        transform: translateX(5px);
      }
    }
    &:nth-of-type(1) {
      .rankNo {
        color: #fff;
        background-color: rgba(124, 192, 247, 1);
      }
    }
    &:nth-of-type(2) {
      .rankNo {
        color: #fff;
        background-color: rgba(76, 175, 80, .6);
      }
    }
    &:nth-of-type(3) {
      .rankNo {
        color: #fff;
        background-color: rgba(255, 87 ,34, .6);
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
