<template>
  <div class="relative bg-[#1172d9]">
    <div
      class="absolute lg:bg-[url('/img/U5.png')] w-[400px] bg-no-repeat h-[200px] lg:bg-[length:350px_100%] top-0 right-0"
    ></div>
    <div
      class="bg-[url('/img/Fon2.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] "
    >
      <div class="container mx-auto px-4 pb-[150px]">
        <div class="lg:flex justify-center items-center mb-7">
          <div class="text-center">
            <p
              class="text-4xl font-bold leading-tight mb-5 uppercase"
            >
              Фотогалерея
            </p>
          </div>
        </div>
        <div class = "flex justify-center text-center">
          <swiper 
          :modules="modules" 
          :pagination="{ clickable: true }"
          :slides-per-view="1"
          :breakpoints="{
      '640': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 2,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }">
                <swiper-slide class = "rounded border-2 border-[#1e7add] bg-[url('/img/gallery/1.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[300px]"></swiper-slide>
                <swiper-slide class = "rounded border-2 border-[#1e7add] bg-[url('/img/gallery/2.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[300px]"></swiper-slide>
                <swiper-slide class = "rounded border-2 border-[#1e7add]  bg-[url('/img/gallery/3.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[300px]"></swiper-slide>
                <swiper-slide class = "rounded border-2 border-[#1e7add] bg-[url('/img/gallery/4.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[300px]"></swiper-slide>
                <swiper-slide class = "rounded border-2 border-[#1e7add] bg-[url('/img/gallery/5.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[300px]"></swiper-slide>
                <swiper-slide class = "rounded border-2 border-[#1e7add] bg-[url('/img/gallery/6.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[300px]"></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div
      class="absolute lg:bg-[url('/img/U6.png')] w-[400px] bg-no-repeat h-[200px] bg-[length:350px_100%] bottom-[30%] left-0"
    ></div>
    <div
      class="z-20 absolute lg:bg-[url('/img/people2.png')] w-[300px] bg-no-repeat h-[300px] bg-[length:250px_100%] bottom-[0] right-[0]"
    ></div>
  </div>
</template>

<script>
  import SwiperClass, { Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination]
      }
    }
  }
</script>

<style>


</style>
