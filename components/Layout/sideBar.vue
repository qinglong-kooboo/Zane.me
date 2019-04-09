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
  width: 19em;
  margin: 1em 0;
  z-index: 1;
  .search-box {
    box-sizing: border-box;
    width: 100%;
    padding: .5em;
    background-color: #fff;
    display: flex;
    align-items: center;
    input {
      height: 2.4em;
      width: calc(100% - 2em);
    }
    & > .iconfont {
      background-color: $input-hover;
      padding: 5px 7px;
      cursor: pointer;
    }
  }
  .article-rank {
    min-height: 350px;
    margin-top: 1em;
    // padding: 0 1em;
    background-color: $sideBar-bg-color;
    .rank-title-wrapper {
      // width: 100%;
      height: 3em;
      line-height: 3em;
      margin-left: 1em;
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
