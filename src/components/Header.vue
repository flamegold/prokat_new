<template>
  <div class="bg-black text-white py-4 lg:relative fixed w-[100%] z-[99] ">
    <div class="container flex justify-between items-center mx-auto lg:px-0 px-8 ">
      <div class="lg:flex hidden flex-1 justify-between items-center">
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
        <a href="https://wa.me/79323217213"><svg xmlns="http://www.w3.org/2000/svg"
            class="text-[#00CCFF] icon icon-tabler icon-tabler-brand-whatsapp hover:scale-[1.2] transition-transform cursor-pointer"
            width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
            <path
              d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1">
            </path>
          </svg></a>
        <a href="https://t.me/+79323217213"><svg xmlns="http://www.w3.org/2000/svg"
            class="text-[#00CCFF] icon icon-tabler icon-tabler-brand-telegram hover:scale-[1.2] transition-transform cursor-pointer"
            width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
          </svg></a>
      </div>
        </div>
        <div><a class="" href = "#prices">Цены</a></div>
        <div><a class="" href = "#team">Команда</a></div>
      </div>
      <div class = "grow-0 2xl:pl-10 2xl:pr-10 xl:pl-10 xl:pr-10 lg:pl-5 lg:pr-2 "><img src="/img/logo.svg" class = "lg:w-[100%] w-[70%]"></div>
      <div class="flex flex-1 xl:gap-20 lg:gap-10 items-center justify-end">
        <div class = "lg:block hidden"><a class="" href = "#contacts">Как добраться?</a></div>
        <div class = "lg:block hidden"><a class="" href = "#faq">FAQ</a></div>
        <div class="relative lg:block hidden">
          <span class="xl:before:content-[url(/img/phone.svg)] left-[-40px] lg:top-0 top-3 absolute"></span>
          <div class="text-2xl">+7 (3452) 61-72-13</div>
          <span class="before:content-['прием_звонков_с_9:00_до_21:00'] absolute text-sm text-[#00CCFF]"></span>
        </div>
        <div class="space-y-2 lg:hidden block cursor-pointer" @click="openMenu">
          <div class="w-8 h-0.5 bg-gray-600"></div>
          <div class="w-8 h-0.5 bg-gray-600"></div>
          <div class="w-8 h-0.5 bg-gray-600"></div>
        </div>
      </div> 
    </div>
  </div>
  <div class = "container fixed lg:hidden block mt-24 z-[99] px-8 bg-black text-white " :class="isOpenMenu ? 'ease-in-out scale-100 transition-transform' : 'transition-transform ease-in-out scale-0' ">
    <div class = "text-2xl gap-y-2 flex flex-col py-4">
      <div><a href = "#" @click="isCloseMenu">Главная</a></div>
      <div><a href = "#prices" @click="isCloseMenu">Цены</a></div>
      <div><a href = "#team" @click="isCloseMenu">Команда</a></div>
      <div><a href = "#contacts" @click="isCloseMenu">Как добраться</a></div>
      <div><a href = "#faq" @click="isCloseMenu">FAQ</a></div>
      <div><a href = "#gallery" @click="isCloseMenu">Галерея</a></div>
      <div class="relative lg:py-0 py-4 lg:items-end flex flex-col">
          <div>
          <div class="text-2xl mb-2 flex gap-4">
            <img src = "/img/phone.svg">
            <span>+7 (3452) 61-72-13</span>
          </div>
          <div class="text-2xl flex gap-4">
            <img src = "/img/phone.svg">
            <span>+7 (963) 069-66-99</span>
          </div>
          <span class="text-sm text-[#00CCFF]">прием звонков с 9:00 до 21:00</span>
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
const isOpenMenu = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

function isCloseMenu() {
  isOpenMenu.value = false
  console.log(isOpenMenu.value)
}

function openMenu () {
  isOpenMenu.value = !isOpenMenu.value    
  }
</script>

<style>

</style>
