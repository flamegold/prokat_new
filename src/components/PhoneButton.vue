<template>
<span class="fixed bottom-10 right-10 cursor-pointer flex h-14 w-14 z-[99]" @click="openModal">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-14 w-14 bg-sky-500">
    <img src = "/img/phone.svg">
  </span>
</span>
  <ModalVue :isOpen="isOpen" @close="closeModal" name="Записаться" />
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
