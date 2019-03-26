<template>
  <div class="swiper-wrapper">
    <transition name="module" mode="out-in">
      <div key="swiper" v-swiper:swiper="swiperOption" class="swiper index">
        <div class="swiper-wrapper">
          <div
            v-for="(banner, index) in banners"
            :key="index"
            class="swiper-slide slide-item"
          >
            <div class="content">
              <img>
              <nuxt-link to="'/'" />
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  // import 'swiper/dist/css/swiper.css'
  // import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        renderSwiper: true,
        banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
        swiperOption: {
          autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
          pagination: {
            clickable: true,
            el: '.swiper-pagination'
          },
          setWrapperSize: true,
          // autoHeight: true,
          mousewheel: true,
          observeParents: true,
          grabCursor: true,
          preloadImages: false,
          lazy: true
        }
      }
    }
    // components: {
    //   swiper,
    //   swiperSlide
    // }
  }

</script>
<style>
</style>
