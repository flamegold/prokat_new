<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-10" @close="$emit('close')">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full flex-wrap content-center justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden  bg-[#222123] rounded-2xl from-[#13DDB2]  to-[#B5F602] p-1 bg-gradient-to-r text-left shadow-xl transition-all sm:my-8 w-[100%] sm:w-full sm:max-w-lg">
              <div class="bg-[#222123] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-2xl">
                <div class="">

                  <div class="sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-white">{{ name }}
                    </DialogTitle>
                    <div class="mt-4">
                      <form class="w-full">
                        <div class="flex flex-wrap -mx-3 mb-3">
                          <div class="w-full md:w-100 px-3">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                              for="grid-first-name">
                              Ваше имя
                            </label>
                            <input required v-model="inputName"
                              class="appearance-none block w-full bg-[#222123] border-[#383636] text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name" type="text" placeholder="Ваше имя...">
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3">
                          <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                              for="grid-password">
                              Номер телефона
                            </label>
                            <input v-mask="'+7 (###) ###-##-##'" required v-model="inputTel"
                              class="appearance-none block w-full bg-[#222123] border-[#383636] text-white border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-password" type="text" placeholder="+7 (999) 999-99-99">
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-[#222123] rounded-b-2xl px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button"
                  class="inline-flex w-full justify-center border border-transparent bg-[#B5F602] rounded-full px-4 py-2 text-base font-medium text-black shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:opacity-90 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="Submit">{{ name }}</button>
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

const props = defineProps({
  isOpen: Boolean,
  name: String
})


const inputName = ref('')
const inputTel = ref('')
const token = ref('5496671113:AAHvbI-TEfK6IwkPHf0AKanDtSUFik4zkRs')
const chatId = ref('690175954')
const message = ref('Новая заявка с сайта prokat-tmn.ru:\nИмя: ' + inputName.value + '\nНомер телефона: ' + inputTel.value);

function Submit() {
  axios.post('https://api.telegram.org/bot' + token.value + '/sendMessage?chat_id=' + chatId.value + '&text=' + message.value);
}
</script>

<style>

</style>