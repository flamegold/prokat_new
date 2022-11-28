<template>
  <div class="bg-gradient-to-r from-[#1172d9] to-[#09386c] text-white">
    <div class="container mx-auto px-4">
      <div
        class="flex py-4 justify-between items-center flex-nowrap lg:flex-row flex-col md:flex-row"
      >
        <div
          class="flex md:justify-between items-center lg:gap-8 md:gap-2 gap-2 md:flex-col lg:flex-row flex-col lg:w-auto w-[100%]"
        >
          <div>
            <a href="/"
              ><img
                class="lg:w-[200px] w-[300px]"
                src="/img/logo.jpg"
                alt=""
                srcset=""
            /></a>
          </div>
          <div class="uppercase text-lg whitespace-nowrap">
            Сервис проката зимнего снаряжения
          </div>
        </div>
        <div
          class="flex items-center lg:gap-8 gap-2 md:flex-col lg:flex-row flex-col lg:w-auto w-[100%] justify-end"
        >
          <div class="font-medium text-3xl py-2 lg:py-0 lg:text-lg flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
</svg>+7 693 069 66 99</div>
          <div @click="open = true"
            class="uppercase bg-[#00ccff] px-4 py-2 rounded-full hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap md:w-auto lg:w-auto w-[100%] text-center"
          >
            Заказать звонок
          </div>
        </div>
      </div>
    </div>
  </div>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="">

                  <div class="mt-3 text-center sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Обратный звонок</DialogTitle>
                    <div class="mt-4">
                      <form class="w-full">
                        <div class="flex flex-wrap -mx-3 mb-3">
                          <div class="w-full md:w-100 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                              Ваше имя
                            </label>
                            <input required v-model="inputName" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ваше имя...">
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-3">
                          <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                              Номер телефона
                            </label>
                            <input v-mask="'+7 (###) ###-##-##'" required v-model="inputTel" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="+7 (999) 999-99-99">
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-300 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click = "Submit">Заказать звонок</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'

const open = ref(false)
const inputName = ref('')
const inputTel = ref('')
const token = ref('5496671113:AAHvbI-TEfK6IwkPHf0AKanDtSUFik4zkRs')
const chatId = ref('690175954')
const message = ref('Новая заявка с сайта prokat-tmn.ru:\nИмя: '+inputName.value+'\nНомер телефона: '+inputTel.value);

function Submit() {
    axios.post('https://api.telegram.org/bot'+token.value+'/sendMessage?chat_id='+chatId.value+'&text='+message.value);
}
</script>

<style></style>
