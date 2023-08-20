<template>
  <div class="">
    <div class="container mx-auto px-4 lg:pb-[150px] pb-10">
      <a name="gallery"></a>
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
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/1.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
              <div class = "row-start-1 row-end-2 col-start-3 col-end-5">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/2.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-1 col-end-2">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/29.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-2 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/32.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-3 col-end-5">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/5.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="grid grid-cols-4 grid-rows-2 gap-4">
              <div class = "row-start-1 row-end-2 col-start-1 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/6.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
              <div class = "row-start-1 row-end-2 col-start-3 col-end-5">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/7.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-1 col-end-2">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/33.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-2 col-end-3">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/34.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
              <div class = "row-start-2 row-end-3 col-start-3 col-end-5">
                <div class="bg-[#222123] rounded-2xl bg-[url('/img/gallery/10.jpg')] bg-center bg-no-repeat bg-[length:100%_100%] h-[400px]"></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="justify-center text-center lg:hidden flex">
        <swiper :modules="modules" navigation :pagination="{ clickable: true }" :slides-per-view="1">
          <swiper-slide>
                <div class="bg-[#222123]"><img src = "/img/gallery/1.jpg" class = "rounded-2xl"></div>
          </swiper-slide>
          <swiper-slide>
                <div class="bg-[#222123]"><img src = "/img/gallery/1.jpg" class = "rounded-2xl"></div>
          </swiper-slide>
          <swiper-slide>
                <div class="bg-[#222123]"><img src = "/img/gallery/1.jpg" class = "rounded-2xl"></div>
          </swiper-slide>
          <swiper-slide>
                <div class="bg-[#222123]"><img src = "/img/gallery/1.jpg" class = "rounded-2xl"></div>
          </swiper-slide>
          <swiper-slide>
                <div class="bg-[#222123]"><img src = "/img/gallery/1.jpg" class = "rounded-2xl"></div>
          </swiper-slide>
          <swiper-slide>
                <div class="bg-[#222123]"><img src = "/img/gallery/1.jpg" class = "rounded-2xl"></div>
          </swiper-slide>
        </swiper>
      </div>

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
