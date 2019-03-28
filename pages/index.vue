<template>
  <div>
    <swiper :sliders="sliderPics" />
    <div class="sliderTextWrapper">
      <div class="sliderTextIcon">
        <span class="iconfont">&#xe77e;</span>
      </div>
      <swiper :sliders="sliderText" />
    </div>
  </div>
</template>

<script>
  import 'vue-zane-swiper/lib/swiper.css'
  export default {
    data() {
      return {
        sliderPics: {
          sliders: [
            {
              src: 'https://i.ibb.co/QccX8Nw/pic1.png',
              index: 0,
              url: '/'
            },
            {
              src: 'https://i.ibb.co/yFbNSFj/pic2.png',
              index: 1,
              url: '/'
            },
            {
              src: 'https://i.ibb.co/rZZNN1Y/pic3.png',
              index: 2,
              url: '/'
            },
            {
              src: 'https://i.ibb.co/WFhr6Vx/pic4.png',
              index: 3,
              route: '/'
            }
          ],
          interval: 4000,
          width: '595px',
          height: '210px',
          isShowDots: true,
          isShowArrows: true
        },
        sliderText: {
          sliders: [
            {
              text: '一个人知道自己为什么而活，就可以忍受任何一种生活。',
              index: 0
            },
            {
              text: '不能听命于自己者，就要受命于他人。',
              index: 1
            },
            {
              text: '但凡不能杀死你的，最终都会使你更强大。 ',
              index: 2
            },
            {
              text: '白昼之光，岂知夜色之深。',
              index: 3
            },
            {
              text: '那些听不见音乐的人认为那些跳舞的人疯了。',
              index: 4
            },
            {
              text: '去喜欢，去放肆，去无疾而终。',
              index: 5
            }
          ],
          mode: 'col',
          isTextSlider: true,
          interval: 4000,
          width: '535px',
          height: '34px'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
