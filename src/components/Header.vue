<template>
  <div class="bg-black text-white py-4 ">
    <div class="container flex justify-between items-center mx-auto ">
      <div class="flex flex-1 justify-between items-center">
        <div class = "flex">
          <div class="flex py-4 justify-center items-center flex-nowrap gap-2">
        <a href="https://vk.com/enottmn"><svg xmlns="http://www.w3.org/2000/svg"
            class="text-[#00CCFF] icon icon-tabler icon-tabler-brand-vk hover:scale-[1.2] transition-transform cursor-pointer"
            width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M14 19h-4a8 8 0 0 1 -8 -8v-5h4v5a4 4 0 0 0 4 4h0v-9h4v4.5l.03 -.004a4.531 4.531 0 0 0 3.97 -4.496h4l-.342 1.711a6.858 6.858 0 0 1 -3.658 4.789h0a5.34 5.34 0 0 1 3.566 4.111l.434 2.389h0h-4a4.531 4.531 0 0 0 -3.97 -4.496v4.5z">
            </path>
          </svg></a>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
            class="text-[#00CCFF] icon icon-tabler icon-tabler-brand-whatsapp hover:scale-[1.2] transition-transform cursor-pointer"
            width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
            <path
              d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1">
            </path>
          </svg></a>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
            class="text-[#00CCFF] icon icon-tabler icon-tabler-brand-telegram hover:scale-[1.2] transition-transform cursor-pointer"
            width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
          </svg></a>
      </div>
        </div>
        <div><a class="text-[20px]" href = "#">Цены</a></div>
        <div><a class="text-[20px]" href = "#">Команда</a></div>
      </div>
      <div class = "grow-0 lg:px-[50px] px-[100px]"><img src="/img/logo.svg"></div>
      <div class="flex flex-1 justify-between items-center">
        <div><a class="text-[20px]" href = "#">Как добраться?</a></div>
        <div><a class="text-[20px]" href = "#">F.A.Q</a></div>
        <div class="relative">
          <span class="before:content-[url(/img/phone.svg)] left-[-40px] absolute"></span>
          <div class="text-2xl">+7 (3452) 61-72-13</div>
          <span class="before:content-['прием_звонков_с_9:00_до_21:00'] absolute text-[14px] text-[#00CCFF]"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'

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
