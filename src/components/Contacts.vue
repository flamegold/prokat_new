<template>
  <div class="">
    <div class="container mx-auto pb-[150px]">
      <div class="lg:flex justify-center items-center mb-7">
        <div class="text-center">
          <h2 class="text-6xl font-extrabold leading-tight mb-5 uppercase text-white">
            Как добраться?
          </h2>
        </div>
      </div>
      <div class="relative z-10 lg:grid text-white gap-[30px] lg:grid-cols-[1fr_550px]">
        <div class="p-[6px] relative rounded-2xl from-[#13DDB2]  to-[#B5F602] bg-gradient-to-r h-[400px] lg:h-[100%] mb-5">
          <iframe class = "rounded-2xl"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A864e2625c01056c15891bd74d68eec2e3bf6238c3a4aacb23728730c9b6671c8&amp;source=constructor"
            width="100%" height="100%" frameborder="0"></iframe>
        </div>
        <div class="flex flex-col justify-end bg-[#1E1D1F] pl-24 py-12 rounded-2xl shadow-2xl shadow-[#222123]/50">
          <div class = "relative">
            <span class="before:content-[url(/img/arrow.svg)] left-[-60px] top-[7px] absolute"></span>
            <p class="lg:text-3xl text-xl text-[#B5F602] uppercase font-medium leading-tight mb-3">Наш
            прокат<br>находится по адресу:</p>
            <p class="lg:text-xl font-medium">11 км Ялуторовского тракта,3 ст</p>
            <p class="lg:text-xl mb-4">База отдыха "Стальной азарт"</p>
          </div>
          <div class = "relative">
            <span class="before:content-[url(/img/arrow.svg)] left-[-60px] top-[7px] absolute"></span>
            <p class="lg:text-3xl text-xl text-[#B5F602] uppercase font-medium  leading-snug">Ориентир:</p>
            <p class="lg:text-xl mb-4">Поворот на заправку ТПК</p>
          </div>
          <div class = "relative">
            <span class="before:content-[url(/img/arrow.svg)] left-[-60px] top-[7px] absolute"></span>
            <p class="lg:text-3xl text-xl text-[#B5F602] uppercase font-medium  leading-snug mb-3">Телефоны для записи:</p>
            <p class="lg:text-2xl">+7 (3452) 61-72-13</p>
            <p class="lg:text-2xl mb-4">+7 (963) 069-66-99</p>
          </div>
          <div class = "relative">
            <span class="before:content-[url(/img/arrow.svg)] left-[-60px] top-[7px] absolute"></span>
            <p class="lg:text-3xl text-xl text-[#B5F602] uppercase font-medium  leading-snug">Социальные сети:</p>
            <p class="lg:text-xl">prokat_enot_tmn</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalVue :isOpen="isOpen" @close="closeModal" />
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

<style>

</style>
