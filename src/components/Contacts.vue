<template>
  <div class="relative  bg-[#1172d9]">
    <div
      class="absolute lg:bg-[url('/img/U4.png')] w-[400px] bg-no-repeat h-[179px] bg-[length:391px_100%] bottom-[20%] right-0"
    ></div>
    <div
      class="bg-[url('/img/Fon7.jpg')] bg-center bg-no-repeat bg-cover"
    >
      <div class="container mx-auto px-4 pb-[150px]">
        <div class = "relative z-10 lg:grid text-white gap-[100px] lg:grid-cols-[1fr_550px]">
          <div class = "border-4 rounded border-white h-[400px] lg:h-[100%] mb-5">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A864e2625c01056c15891bd74d68eec2e3bf6238c3a4aacb23728730c9b6671c8&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
          </div>
          <div class = "flex flex-col justify-end">
            <p class = "lg:text-4xl text-2xl text-[#00ccff] uppercase font-medium leading-tight mb-3">Наш прокат<br>находится по адресу</p>
            <p class = "text-lg lg:text-2xl font-medium">г. Тюмень, ул. Республики 137</p>
            <p class = "lg:text-lg ">(на пересечении Республики и холодильной)</p>
            <p class = "lg:text-lg mb-7">Вход с обратной стороны здания</p>
            <p class = "lg:text-4xl text-2xl text-[#00ccff] uppercase font-medium mb-4 leading-snug">Так же вы можете позвонить нам:</p>
            <div class = "lg:text-4xl text-2xl bg-white text-black mb-4 lg:w-[360px] text-center font-bold rounded-full py-2">+7 (963) 069 66 99</div>
            <div class = "lg:text-4xl text-2xl bg-white text-black lg:w-[360px] text-center font-bold rounded-full py-2 mb-5">+7 (3452) 617-213</div>
            <div @click = "openModal" class = "lg:text-4xl text-2xl bg-[#00ccff] text-white lg:w-[360px] text-center rounded-full py-2 hover:opacity-90 transition-opacity cursor-pointer">Заказать звонок</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalVue :isOpen="isOpen" @close="closeModal"/>
</template>

<script setup>
import { ref } from 'vue'
import ModalVue from './Modal.vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

<style></style>
