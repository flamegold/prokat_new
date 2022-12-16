<template>
  <div class="bg-gradient-to-r from-[#1172d9] to-[#09386c] text-white">
    <div class="container mx-auto px-4">
      <div class="flex py-4 justify-between items-center flex-nowrap lg:flex-row flex-col md:flex-row">
        <div
          class="flex md:justify-between items-center lg:gap-8 md:gap-2 gap-2 md:flex-col lg:flex-row flex-col lg:w-auto w-[100%]">
          <div>
            <a href="/"><img class="lg:w-[200px] w-[300px]" src="/img/logo.jpg" alt="" srcset="" /></a>
          </div>
          <div class="uppercase text-lg whitespace-nowrap">
            Сервис проката зимнего снаряжения
          </div>
        </div>
        <div class="flex items-center lg:gap-8 gap-2 md:flex-col lg:flex-row flex-col lg:w-auto w-[100%] justify-end">
          <div class="font-medium text-3xl py-2 lg:py-0 lg:text-lg flex items-center gap-2"><svg
              xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
              </path>
            </svg>+7 693 069 66 99</div>
          <div @click="openModal"
            class="uppercase bg-[#00ccff] px-4 py-2 rounded-full hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap md:w-auto lg:w-auto w-[100%] text-center">
            Заказать звонок
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalVue :isOpen="isOpen" @close="closeModal" />
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
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
