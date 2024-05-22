<template>
  <a name="faq"></a>
  <div class="relative lg:mt-20">
    <div class="bg-[url('/img/Fon3.jpg')] bg-center bg-no-repeat  bg-[length:100%_102%]">
      <div class="container mx-auto lg:pb-[150px] pb-10">
        <div class="lg:flex justify-center items-center mb-7">
          <div class="text-center">
            <h2 class="lg:text-4xl text-2xl font-extrabold leading-tight mb-5 text-white">
              FAQ. Отвечаем на ваши вопросы
            </h2>
          </div>
        </div>
        <div class = "bg-[#1E1D1F] lg:py-12 py-8 text-white shadow-2xl shadow-[#222123]/50 rounded-2xl mb-20">
          <div class="relative lg:mb-14 mb-10 lg:px-24 px-8" v-for="(question, index) in questions" :key="question.title">
            <span class="lg:before:content-[url(/img/arrow.svg)] left-[40px] top-[0px] absolute"></span>
            <p class="lg:text-2xl text-xl text-[#B5F602] uppercase font-medium leading-tight lg:mb-3 mb-1 cursor-pointer pr-4" @click="handleAccordion(index)">{{ question.title }}</p>
            <Collapse :when="questions[index].isExpanded">
              <p class="font-medium">{{ question.answer }}</p>
            </Collapse>
            <span :class = "questions[index].isExpanded ? 'after:content-[url(/img/minus.svg)]' : 'after:content-[url(/img/plus.svg)]'" class=" right-[35px] top-[0px] absolute"></span>
            <span class="before:content-[''] w-[calc(100%-60px)] h-[1px] bg-white  left-[30px] bottom-[-20px] absolute"></span>
          </div>
        </div>
        <div class = "bg-[#1E1D1F] py-2 px-2 text-white shadow-2xl shadow-[#222123]/50 rounded-2xl lg:gap-20 gap-8 flex lg:flex-row flex-col">
          <div class = "flex justify-center">
            <img src ="/img/faq.png" class = "w-[100%]">
          </div>
          <div class = "lg:pt-10 lg:px-10 px-4">
            <h3 class = "lg:text-2xl text-xl text-[#B5F602] font-bold mb-4">Остались ещё вопросы?</h3>
            <p class="font-medium">Получите бесплатную консультацию и помощь в выборе техники от эксперта по телефону:</p>
            <div class = "flex lg:flex-row flex-col lg:gap-[50px] gap-2  lg:mt-10 mt-8">
              <div class = "relative">
                <span class="before:content-[url(/img/tel2.svg)] bg-center bg-no-repeat  bg-[length:100%_100%]"></span>
              </div>
              <div class = "relative">
                <span class="before:content-[url(/img/tel.svg)] bg-center bg-no-repeat  bg-[length:100%_100%]"></span>
                
              </div>
            </div>
            <div class = "flex lg:flex-row flex-col lg:gap-8 gap-2 lg:mb-10 mb-4 lg:mt-10 mt-8 relative">
              <a class="px-10 py-3 border text-[#16fa01] bg-[#222123] border-[#383636] text-center" href ="https://wa.me/79323217213">Написать в WhatsApp</a>
              <a class="px-10 py-3 border text-[#00ccff] bg-[#222123] border-[#383636] text-center" href = "https://t.me/+79323217213">Написать в Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue'
import { Collapse } from 'vue-collapsed'

const isExpanded = ref(false)


const questions = reactive([
  {
    title: 'Я никогда не ездил на мото. Смогу ли я управлять байком?',
    answer: 'Главное условие, умение управлять велосипедом! Но даже без него с нашей помощью вы овладеете данным навыком.',
    isExpanded: false
  },
  {
    title: 'ЧТО НУЖНО ВЗЯТЬ С СОБОЙ?',
    answer: 'Удобную одежду, сменную обувь и хорошее настроение)',
    isExpanded: false
  },
  {
    title: 'НУЖНЫ ЛИ ПРАВА?',
    answer: 'Для управления данными мотоциклами водительское удостоверение не требуется, так как катание проходит не по дорогам общего пользования',
    isExpanded: false
  },
  {
    title: 'ВЫ ОБУЧАЕТЕ ЕЗДЕ НА ПИТБАЙКАХ И ЭНДУРО?',
    answer: 'Да, обычно на это уходит не более 15 минут. Так же у нас есть индивидуальные занятия, на которых ваш прогресс будет проходить очень быстро',
    isExpanded: false
  },
  {
    title: 'КАКИЕ БАЙКИ ЕСТЬ?',
    answer: 'В нашем парке имеются мотоциклы таких производителей как:Kayo, Motoland, Regulmoto, GR. объёмом двигателей 125, 140, 250cm3, которые оснащены как механическими коробками переключения скоростей, так и полуавтоматическими',
    isExpanded: false
  },
  {
    title: 'С КАКОГО ВОЗРАСТА МОЖНО ЗАПИСАТЬСЯ?',
    answer: 'Наша техника позволяет начать катание уже с 6 лет, при условии сопровождения взрослых или под руководством инструктора.',
    isExpanded: false
  }
])


function handleAccordion(selectedIndex) {
    questions[selectedIndex].isExpanded = !questions[selectedIndex].isExpanded
}

</script>

<style>

</style>
