<template>
  <div class="comment-list">
    <ul class="list">
      <li v-for="(comment, index) in comments" :key="index" class="comment">
        <img :src="comment.avata" alt>
        <div class="comment-body">{{ comment.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      comments: {
        type: Array,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comment-list {
    background-color: #fff;
  }
</style>
