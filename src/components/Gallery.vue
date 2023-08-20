<template>
  <a name="gallery"></a>
    <div class="container mx-auto px-4 lg:pb-[150px] pb-10">
      <div class="lg:flex justify-center items-center mb-7">
        <div class="text-center">
          <p class="text-5xl font-bold leading-tight mb-5 uppercase text-white">
            Фотогалерея
          </p>
        </div>
      </div>
      <div class="justify-center text-center lg:flex hidden">
        <swiper :modules="modules" navigation :pagination="{ clickable: true }" :slides-per-view="1">
          <swiper-slide>
            <div class="grid grid-cols-4 grid-rows-2 gap-4">
              <div class = "row-start-1 row-end-2 col-start-1 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/1.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-1 row-end-2 col-start-3 col-end-5">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/2.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-1 col-end-2">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/34.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-2 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/35.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-3 col-end-5">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/5.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid grid-cols-4 grid-rows-2 gap-4">
              <div class = "row-start-1 row-end-2 col-start-1 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/6.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-1 row-end-2 col-start-3 col-end-5">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/7.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-1 col-end-2">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/36.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-2 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/37.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-3 col-end-5">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/10.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid grid-cols-2 grid-rows-2 gap-4">
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/11.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/12.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/13.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/14.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid grid-cols-2 grid-rows-2 gap-4">
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/15.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/16.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/17.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/18.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid grid-cols-2 grid-rows-2 gap-4">
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/19.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/20.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/21.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/22.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid grid-cols-2 grid-rows-2 gap-4">
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/23.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/24.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/25.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/26.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid grid-cols-2 grid-rows-2 gap-4">
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/27.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/28.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/29.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/30.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid grid-cols-2 grid-rows-2 gap-4">
              <div class = "row-start-2 row-end-3 col-start-1 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/31.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-1 row-end-2 col-start-1 col-end-2">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/32.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
              <div class = "row-start-1 row-end-2 col-start-2 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/33.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[350px]"></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="justify-center text-center lg:hidden flex">
        <swiper :modules="modules" navigation :pagination="{ clickable: true }" :slides-per-view="1">
          <swiper-slide v-for="item in 33">
                <div class="bg-[#222123]"><img :src = "'/img/gallery/' + item +'.jpg'" class = "rounded-2xl"></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script>
import SwiperClass, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    }
  }
}
</script>

<style>


</style>
