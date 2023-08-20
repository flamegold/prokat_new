<template>
  <div class="relative overflow-hidden">

  </div>
  <div class="text-white lg:pb-[200px] pb-40 container">
    <div class="lg:px-[170px] px-4 lg:bg-[url('/img/enot_p1.png')] bg-[#000] rounded-2xl lg:h-[1700px] bg-center bg-no-repeat  bg-[length:100%_100%] top-[101px] relative mx-auto z-10">
      <div class = "text-center lg:pt-[100px] pt-10 uppercase lg:leading-[190px] lg:text-9xl mb-10 lg:mb-0 text-5xl font-bold font-ag">Прокат</div>
      <div class = "text-center uppercase lg:text-5xl text-2xl lg:leading-[90px] font-bold">
        <div class = "grid lg:grid-cols-2 grid-cols-1 justify-center lg:px-4 xl:px-24 md:px-4 px-4 gap-y-2">
          <div class="font-ag lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 relative">
            <span class="before:content-[''] rounded-full lg:w-4 lg:h-4 w-3 h-3 bg-[#B5F602] lg:left-[-30px] left-0 lg:top-[40%] top-[30%] absolute"></span>
            <span>Питбайков</span>
            <span class="after:content-[''] rounded-full lg:w-4 lg:h-4 w-3 h-3 bg-[#B5F602] lg:right-[-30px] right-0 lg:top-[40%] top-[30%] absolute"></span>
          </div>
          <div class = "font-ag lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 relative">
            <span class="before:content-[''] lg:hidden block rounded-full lg:w-4 lg:h-4 w-3 h-3 bg-[#B5F602] left-0 top-[30%] absolute"></span>
            <span>Эндуро</span>
            <span class="after:content-[''] rounded-full lg:w-4 lg:h-4 w-3 h-3 bg-[#B5F602] lg:right-[20px] right-0 lg:top-[40%] top-[30%] absolute"></span>
          </div>
          <div class = "flex lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-3 justify-center font-ag relative">
            <span class="before:content-[''] rounded-full lg:w-4 lg:h-4 w-3 h-3 bg-[#B5F602] lg:left-[70px] left-0 lg:top-[40%] top-[30%] absolute"></span>
            <span>Квадроциклов</span>
            <span class="after:content-[''] rounded-full lg:w-4 lg:h-4 w-3 h-3 bg-[#B5F602] lg:right-[70px] right-0 lg:top-[40%] top-[30%] absolute"></span>
          </div>
        </div>
      </div>
      <div class = "flex lg:flex-row lg:gap-0 gap-10 justify-center flex-col relative lg:pt-[100px] pt-8 lg:justify-between">
        <div class = "flex justify-center"><img src="/img/light.svg" alt="light" srcset="" class = "lg:w-[90%] w-[30%]"></div>
        <div class = "flex justify-center"><img src="/img/medium.svg" alt="medium" srcset="" class = "lg:w-[90%] w-[50%]"></div>
        <div class = "flex justify-center"><img src="/img/hard.svg" alt="hard" srcset="" class = "lg:w-[90%] w-[30%]"></div>
      </div>
      <div class = "pl-[60px] lg:mt-[150px] mt-12">
        <div class="relative lg:mb-10 mb-6">
          <span class="before:content-[url(/img/arrow.svg)] left-[-50px] top-[10px] absolute"></span>
          <div class = "lg:text-3xl text-xl uppercase">Сопровождение<br>гида-инструктора</div>
        </div>
        <div class="relative">
          <span class="before:content-[url(/img/arrow.svg)] left-[-50px] top-[10px] absolute"></span>
          <div class = "lg:text-3xl text-xl uppercase">Внедорожное<br>путешествие</div>
        </div>
      </div>
      <div class = "relative lg:mt-[450px] mt-12 lg:pb-[50px] pb-6 flex lg:flex-row flex-col lg:gap-4 gap-4">
        <button @click="openModal" class = "text-center uppercase font-bold bg-[#B5F602] px-[60px] text-black py-[15px] rounded-full">Записаться</button>
        <a href = "#gallery" class = "text-center uppercase font-bold text-[#B5F602] rounded-full border-2 border-[#B5F602] bg-[#000] bg-opacity-60 py-[15px] px-[60px]">Фотогалерея</a>
      </div>
    </div>
  </div>
  <ModalVue :isOpen="isOpen" @close="closeModal" name="Записаться" />
</template>

<script setup>
import { ref } from 'vue'
import ModalVue from './Modal.vue'

const isOpen = ref(false)
const name = ref('');

function closeModal() {
  isOpen.value = false
}


function openModal() {
  isOpen.value = true
}

</script>

<style>

</style>
