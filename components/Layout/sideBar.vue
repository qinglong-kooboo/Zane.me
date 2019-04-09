<template>
  <div class="sideBar">
    <div class="search-box">
      <input v-model.trim="keyword" type="text" placeholder="知者不惑，仁者不忧，勇者不惧">
      <span class="iconfont" @click="handleSearch">&#xe505;</span>
    </div>
    <div class="article-rank">
      <div class="rank-title-wrapper">
        <span class="iconfont">&#xe729;</span>
        <span class="rank-title">俊采星驰</span>
      </div>
      <rank-list />
    </div>
  </div>
</template>

<script>
  import rankList from '../../components/rankList'
  export default {
    components: {
      rankList
    },
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      handleSearch() {
        const keyword = this.keyword
        this.$router.push({ name: 'search-keyword', params: { keyword } })
      }
    }
  }

</script>
<style lang="scss" scoped>
.sideBar {
  width: 17.5em;
  margin: 1em 14em 0 1em;
  z-index: 1;
  .search-box {
    width: 100%;
    height: 2em;
    padding: .5em 0 .5em .5em;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-right: .5em;
    input {
      height: 100%;
      width: calc(100% - 35px);
      border: none;
      padding: 0;
      background-color: $input-bgc;
      outline:0;
      text-indent: 8px;
      transition: all .5s ease;
      &:hover {
        border: none;
        background-color: $input-hover;
      }
    }
    & > .iconfont {
      background-color: $input-hover;
      padding: 3px 6px;
      cursor: pointer;
    }
  }
  .article-rank {
    min-height: 350px;
    margin-top: 1em;
    margin-right: -6px;
    background-color: $sideBar-bg-color;
    .rank-title-wrapper {
      width: 100%;
      height: 3em;
      line-height: 3em;
      margin: 0 auto;
      padding: 0 1em;
      border-bottom: 1px dashed $background;
      .rank-title {
        font-weight: 700;
      }
      & > .iconfont {
        margin-right: .5em;
      }
    }
  }
}
</style>
