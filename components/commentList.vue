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
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="reply-content" v-html="markedComment(comment.reply)"></div>
          </div>
          <div class="comment-footer">
            <span class="comment-date">{{ comment.createdAt | calcTimeToNow }}</span>
            <span class="reply-link">
              <span class="iconfont icon-reply"></span>
              <span class="reply-button" @click.stop="handleReply(comment, $event)">回复</span>
            </span>
            <span class="comment-thumbup">
              <span class="iconfont icon-thumbup"></span>
              <span>顶&nbsp;({{ comment.thumbup }})</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
    <form class="comment-form">
      <div class="editer-user">
        <img src="/imgs/hike.jpg" class="comment-gravatar">
        <div v-if="hasLocalUserinfo" class="comment-userinfo">
          <span :style="{ fontWeight: 700 }">{{ user.editerName }}&nbsp;&nbsp;</span>
          <span class="iconfont icon-settings"></span>
          <span class="iconfont-alt">设置账户信息
            <ul class="userinfo-options">
              <li class="edit-userinfo">编辑信息</li>
              <li class="clear-userinfo">清空信息</li>
            </ul>
          </span>
        </div>
        <div v-else class="input-wrapper">
          <input v-model="user.editerName" type="text" class="editer-name" placeholder="*名字">
          <input v-model="user.editerMail" type="text" class="editer-email" placeholder="*邮箱">
          <input v-model="user.editerSite" type="text" class="editer-site" placeholder="网址">
        </div>
      </div>
      <transition name="reply">
        <div v-if="showReplyOptions" class="reply-options">
          <div class="comment-source">
            <span> 回复&nbsp;&nbsp;&nbsp;
              <span class="comment-source-link" :style="{ fontWeight: 700 }" @click="scrollToOrigin">{{ orginCommentInfo.replySource }}:</span>
            </span>
            <span class="iconfont icon-quxiao-moren" @click="showReplyOptions = false"></span>
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="origin-comment" v-html="markedComment(orginCommentInfo.originComment)">
          </div>
        </div>
      </transition>
      <div class="edit-body">
        <div
          ref="commentContent"
          class="edit-content"
          type="text"
          :placeholder="commentPlaceholder"
          contenteditable="true"
          @input="handleInput"
        >
        </div>
        <transition name="preview">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-show="enableCommentPreview" ref="previewContent" class="preview-screen" v-html="markedComment(commentContent)">
          </div>
        </transition>
        <div class="edit-tool-bar">
          <div class="edit-options">
            <a title="emoji">
              <div class="emoji-screen">
                <ul class="emoji-list">
                  <li v-for="(item, index) in emojiList" :key="index" class="emoji-item" @click="insertComment(item)">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <span class="iconfont icon-emoji"></span>
            </a>
            <a title="image" @click="insertOption('image')">
              <span class="iconfont icon-picture"></span>
            </a>
            <a title="link" @click="insertOption('link')">
              <span class="iconfont icon-link"></span>
            </a>
            <a title="code" @click="insertOption('code')">
              <span class="iconfont icon-code"></span>
            </a>
            <a title="preview" @click="enableCommentPreview = !enableCommentPreview">
              <span class="iconfont icon-preview"></span>
            </a>
          </div>
          <button type="button" class="button-launch" @click="handleSubmit">
            <span>发射</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import consola from 'consola'
  import config from '../lib/config'
  import reg from '../utils/reg'
  import { browserParse, osParse } from '../utils/parse-os-ua.js'
  import marked from '~/plugins/marked'
  export default {
    props: {
      comments: {
        type: Array,
        default: () => {}
      }
    },
    data() {
      return {
        pid: 0,
        showReplyOptions: false,
        hasLocalUserinfo: false,
        commentPlaceholder: '期君独见',
        commentContent: '',
        emojiList: config.emojis,
        enableCommentPreview: false,
        orginCommentInfo: {
          replySource: '',
          orginComment: '',
          pageX: 0,
          pageY: 0
        },
        user: {
          editerName: '',
          editerMail: '',
          editerSite: ''
        }
      }
    },
    mounted() {
      const name = localStorage.getItem('name')
      const email = localStorage.getItem('email')
      const site = localStorage.getItem('site')
      if (name && email) {
        this.hasLocalUserinfo = true
        this.user.editerName = name
        this.user.editerMail = email
        this.user.editerSite = site
      }
    },
    methods: {
      browserParse,
      osParse,
      // 根据id 查找pid
      findCommentSource(pid) {
        const parent = this.comments.find(comment => Object.is(comment.id, pid))
        return parent ? parent.author.name : null
      },
      // markdown 转 html
      markedComment(content) {
        return marked(content)
      },
      // 点击回复，跳转评论底部，并记录锚点
      handleReply(comment, $event) {
        this.showReplyOptions = true
        this.pid = comment.id
        this.$nextTick(() => {
          window.scrollTo({
            top: document.body.clientHeight,
            left: 0,
            behavior: 'smooth'
          })
          this.orginCommentInfo.pageX = $event.pageX
          this.orginCommentInfo.pageY = $event.pageY
          this.orginCommentInfo.replySource = `#${comment.id}@${comment.author.name}`
          this.orginCommentInfo.originComment = `${comment.reply}`
        })
      },
      // contenteditable为true，监听input实现输入
      handleInput($event) {
        this.commentContent = this.$refs.commentContent.innerText
      },
      // 输入emoji, markdown placehoder...
      insertComment(string) {
        consola.ready(string)
        this.$refs.commentContent.innerText += string
        this.commentContent = this.$refs.commentContent.innerText
      },
      // 跳转父评论锚点处
      scrollToOrigin() {
        window.scrollTo({
          top: this.orginCommentInfo.pageY,
          left: this.orginCommentInfo.pageX,
          behavior: 'smooth'
        })
      },
      // 插入markdown placeholder
      insertOption(option) {
        switch (option) {
        case 'image': this.insertComment('![](https://)'); break
        case 'link' : this.insertComment('[](https://)'); break
        case 'code' : this.insertComment('\n```javascript\n```\n'); break
        }
      },
      // 验证评论者信息
      validate() {
        if (!this.user.editerName) {
          alert('请留下你的名字')
          return false
        } else if (!reg.regMail.test(this.user.editerMail)) {
          alert('邮箱不合法')
          return false
        } else if (this.editerWebsite && !reg.regUrl.test(this.user.editerSite)) {
          alert('链接不合法')
          return false
        } else {
          return true
        }
      },
      // 提交评论
      handleSubmit() {
        if (!this.validate() || !this.commentContent) {
          consola.ready(this.commentContent)
          return
        }
        const params = {
          pid: this.pid,
          author: this.user,
          content: this.commentContent
        }
        this.$store.dispatch('comment/submitComment', params).then(res => {
          localStorage.setItem('name', this.user.editerName)
          localStorage.setItem('email', this.user.editerMail)
          localStorage.setItem('site', this.user.editerSite)
        })
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
    border-bottom: 1px dashed $background;
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
          margin-top: 0.5em;
          & > span {
            margin-right: 1.2em;
            font-size: $font-size-base;
            font-weight: 700;
          }
          > .os-edition,
          > .ua-edition,
          > .ip-location {
            color: $disabled;
            font-size: 0.75em;
            .iconfont {
              font-size: 0.75em;
              margin-right: 0.5em;
            }
          }
          > .comment-id {
            position: absolute;
            right: 1.5em;
            color: $disabled;
            font-size: 0.85em;
          }
        }
        .comment-content {
          font-size: 0.95em;
          line-height: 2em;
          margin: 0.5em 0;
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
        .comment-footer {
          display: flex;
          align-items: center;
          margin-bottom: 0.5em;
          font-size: 0.8em;
          & > span {
            margin-right: 1em;
          }
          .comment-date {
            color: $disabled;
            letter-spacing: 1px;
          }
          .reply-link,
          .comment-thumbup {
            display: flex;
            align-items: center;
            color: $link-color;
            cursor: pointer;
            > .iconfont {
              font-size: 1em;
            }
          }
        }
      }
    }
  }
  .comment-form {
    margin: 1em 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .editer-user {
      position: relative;
      float: right;
      width: 100%;
      margin-bottom: 1em;
      display: flex;
      align-items: center;
      .comment-gravatar {
        width: 3em;
        height: 3em;
        display: inline-block;
        vertical-align: top;
        margin-right: 1.5em;
        border: 4px solid rgb(235, 235, 235);
      }
      .comment-userinfo {
        position: absolute;
        right: 0;
        font-size: $font-size-small;
        > .iconfont, .iconfont-alt {
          font-size: $font-size-mini;
          > .userinfo-options {
            display: none;
            margin-top: .5em;
            position: absolute;
            right: 0;
            background-color: $input-hover;
            z-index: 10;
            .edit-userinfo, .clear-userinfo {
              font-size: $font-size-mini;
              padding: .5em;
              cursor: pointer;
              &:hover {
                background-color: #008B8B;
              }
            }
          }
          &:hover {
            > .userinfo-options {
              display: block;
            }
          }
        }
      }
      .input-wrapper {
        width: 95%;
        display: flex;
        align-items: center;
        input {
          width: 35%;
          margin-right: 1em;
          height: 2em;
          flex-grow: 1;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .reply-options {
      float: right;
      width: 100%;
      margin-bottom: 1em;
      background-color: #fff;
      &.reply-enter-active, .reply-leave-active {
        transition: opacity .5s
      }
      &.reply-enter, .reply-leave-active {
        opacity: 0
      }
      .comment-source, .origin-comment {
        background-color: $input-bgc;
        &:hover {
          background-color: $textarea-hover;
        }
      }
      .origin-comment {
        max-height: 10em;
        overflow: auto;
        padding: 1rem;
      }
      .comment-source {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        padding: 0 1rem;
        line-height: 2.6em;
        height: 2.6em;
        > .iconfont, .comment-source-link{
          cursor: pointer;
        }
      }
    }
    .edit-body {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 8em;
      width: 100%;
      background-color: $input-bgc;
      .edit-content {
        min-height: 6em;
        // max-height: 36em;
        position: relative;
        flex: 1;
        line-height: 2em;
        color: $text;
        border: none;
        padding: 0;
        letter-spacing: .1em;
        background-color: $input-bgc;
        resize: none;
        outline: 0;
        text-indent: 6px;
        &:hover {
          background-color: $textarea-hover;
        }
        &:empty:before {
          content: attr(placeholder);
          color: $disabled;
        }
      }
      .preview-screen {
        position: absolute;
        left: 0;
        bottom: 2em;
        width: 100%;
        height: calc(100% - 2em);
        background-color: hsl(0, 0%, 91%);
        overflow-y: scroll;
        z-index: 2;
        &.preview-enter-active, .preview-leave-active {
          transition: opacity .3s
        }
        &.preview-enter, .preview-leave-active {
          opacity: 0
        }
      }
      .emoji-screen {
        display: none;
        position: absolute;
        left: 0;
        bottom: 2em;
        width: 100%;
        height: calc(100% - 2em);
        max-height: 6em;
        background-color: $background;
        z-index: 3;
        transition: all 1s ease;
        .emoji-list {
          width: 100%;
          height: 100%;
          line-height: 1em;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          overflow-y: scroll;
          .emoji-item {
            font-size: 1.2em;
            padding: .5em;
            &:hover {
              background-color: $input-bgc;
            }
          }
        }
      }
      .edit-tool-bar {
        height: 2em;
        line-height: 2em;
        flex: 0 1 2em;
        background-color: $input-hover;
        display: flex;
        justify-content: space-between;
        .edit-options {
          display: flex;
          align-items: center;
          > a {
            padding: 0 0.5em;
            margin-right: 0.5em;
            cursor: pointer;
            &:hover {
              background-color: $textarea-hover;
            }
            &:first-of-type:hover {
              > .emoji-screen {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
</style>
