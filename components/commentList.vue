<template>
  <div class="comment-wrapper">
    <div class="comment-tools"></div>
    <ul class="comment-list">
      <li v-for="(comment, index) in comments" :key="index" class="comment-item">
        <img :src="comment.author.gravatar" alt>
        <div class="comment-body">
          <div class="comment-header">
            <span class="comment-author-name">{{ comment.author.name }}</span>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-if="comment.agent" class="os-edition" v-html="osParse(comment.agent)"></span>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-if="comment.agent" class="ua-edition" v-html="browserParse(comment.agent)"></span>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-if="comment.ip_location" class="ip-location">
              <span>{{ comment.ip_location.country }}</span>
              <span>-</span>
              <span>{{ comment.ip_location.city }}</span>
            </span>
            <span class="comment-id">#{{ comment.id }}</span>
          </div>
          <div class="comment-content">
            <p v-if="!!findCommentSource(comment.pid)">
              <span>回复&nbsp;</span>
              <span>#{{ comment.pid }}&nbsp;</span>
              <span>@{{ findCommentSource(comment.pid) }}:</span>
            </p>
            <p class="reply-content">
              {{ comment.reply }}
            </p>
          </div>
          <div class="comment-footer">
            <span class="comment-date">
              {{comment.createdAt}}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { browserParse, osParse } from '../utils/parse-os-ua.js'
  export default {
    props: {
      comments: {
        type: Array,
        default: () => {}
      }
    },
    methods: {
      browserParse,
      osParse,
      findCommentSource(pid) {
        const parent = this.comments.find(comment => Object.is(comment.id, pid))
        return parent ? parent.author.name : null
      }
    }
  }
</script>

<style lang="scss">
  .comment-wrapper {
    padding: 1em;
    background-color: #fff;
    .comment-tools {
      height: 2em;
      border-bottom: 1px solid $grey;
      margin-bottom: 1em;
    }
    .comment-list {
      background-color: #fff;
      overflow: hidden;
      .comment-item {
        display: flex;
        align-items: center;
        float: right;
        width: 95%;
        margin-bottom: 1.5em;
        background-color: $input-bgc;
        & > img {
          margin-left: -1.5em;
          width: 3em;
          height: 3em;
          border: 4px solid rgb(235, 235, 235);
          border-radius: 2px;
        }
        .comment-body {
          min-height: 7em;
          width: calc(100% - 4em);
          padding-left: 1em;
          .comment-header {
            display: flex;
            align-items: center;
            margin-top: .5em;
            & > span {
              margin-right: 1.2em;
              font-size: $font-size-base;
              font-weight: 700;
            }
            > .os-edition,
            > .ua-edition,
            > .ip-location {
              color: $disabled;
              font-size: .75em;
              .iconfont {
                font-size: .75em;
                margin-right: .5em;
              }
            }
            > .comment-id {
              position: absolute;
              right: 1.5em;
              color: $disabled;
              font-size: .85em;
            }
          }
          .comment-content {
            font-size: .95em;
            line-height: 2em;
            margin: .5em 0;
            & > p > span {
              font-size: $font-size-base;
              font-weight: 700;
              &:first-of-type {
                color: $disabled;
              }
            }
            .reply-content {
              margin-bottom: 1em;
            }
          }
        }
      }
    }
  }
</style>
