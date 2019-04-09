<template>
  <ul class="sideMenu">
    <li
      v-for="(item, index) in menuList"
      :key="index"
      class="menuItem"
      :class="{ 'menuItem-active': isActive === index }"
      @click="triggerMenuItem(index)"
    >
      <nuxt-link :to="item.route" exact>
        <i :class="item.icon"></i>
        <span
          class="menuTitle"
          :class="{ 'menuTitle-active': isActive === index }"
        >{{ item.title }}
        </span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'side-menu',
    data() {
      return {
        isActive: 0,
        menuList: [
          {
            title: '明殿',
            icon: 'flaticon-chinese-new-year',
            route: '/'
          },
          {
            title: '宁静寺',
            icon: 'flaticon-china',
            route: '/diary'
          },
          {
            title: '琼宝阁',
            icon: 'flaticon-fan',
            route: '/about'
          },
          {
            title: '无色庵',
            icon: 'flaticon-teapot',
            route: '/diary'
          },
          {
            title: '乐斋',
            icon: 'flaticon-erhu',
            route: '/diary'
          },
          {
            title: '天涯',
            icon: 'flaticon-cultures',
            route: '/diary'
          },
          {
            title: '狂浪生',
            icon: 'flaticon-dragon-1',
            route: '/diary'
          },
          {
            title: '百鸣苑',
            icon: 'flaticon-face',
            route: '/diary'
          }
        ]
      }
    },
    methods: {
      triggerMenuItem(index) {
        this.isActive = index
      }
    }
  }
</script>
<style lang="scss" scoped>
.sideMenu {
  width: 12.5em;
  height: auto;
  position: fixed;
  left: calc((100% - 75em) / 2);
  list-style: none;
  padding: 1em 0 0 0;
  margin: 0;
  z-index: 1001;
  .menuItem {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    padding: .8em 0 .8em 1em;
    user-select: none;
    border-radius: 2px;
    &-active {
      background-color: #fff;
      color: $primary;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
    .menuTitle {
      font-size: $font-size-base;
      font-weight: 700;
      color: $secondary;
      &-active {
        color: $primary;
      }
    }
    .flaticon-chinese-new-year,
    .flaticon-fan,
    .flaticon-dragon-1,
    .flaticon-erhu,
    .flaticon-china,
    .flaticon-face,
    .flaticon-teapot,
    .flaticon-cultures-1,
    .flaticon-cultures {
      &::before {
        font-size: 1.1em;
        margin: 0 1em 0 0;
      }
    }
    &:hover {
      color: $primary;
      .menuTitle {
        color: $primary;
      }
    }
  }
}
</style>
