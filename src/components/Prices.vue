<template>
  <a name="prices"></a>
  <div class="/bg-[url('/img/fon_2.png')] bg-center bg-no-repeat bg-[length:100%_100%]">
    <div class="container mx-auto lg:pb-[150px] pb-10 lg:py-10 py-4">
      <div class="lg:flex justify-center items-center mb-5">
        <div class="text-center">
          <h2 class="lg:text-5xl text-3xl font-extrabold leading-tight uppercase text-white">
            Цены
          </h2>
        </div>
      </div>
      <div class="relative grid lg:grid-cols-3 grid-cols-1 gap-y-10 justify-between lg:pt-[50px] pt-4 gap-x-10 ">
        <div>
          <h3 class="lg:text-2xl text-xl text-center text-white  uppercase font-ag flex flex-col justify-center gap-x-2">
          <div>1 час</div>
          <div>последующие</div>
          </h3>
          <div class="p-1 rounded-2xl from-[#13DDB2]  to-[#B5F602] bg-gradient-to-r lg:h-[270px] h-auto mt-4">
            <div class="flex justify-center lg:px-4 px-8 font-semibold rounded-2xl bg-[#1E1D1F] text-white lg:h-[260px] h-auto w-full  py-4 text-xl">
              <div class = "justify-center items-center flex">
              <div class = "grid grid-cols-[repeat(3,1fr)] items-center pb-[10px] gap-x-4 gap-y-2">
                <div>Питбайк</div>
                <div class="text-center">1500</div>
                <div>1000</div>
                <div>Эндуро</div>
                <div class="text-center">2000</div>
                <div>1500</div>
                <div>Квадрик</div>
                <div class="text-center">2000</div>
                <div>1500</div>
                <div>Мотоботы</div>
                <div class="text-center">500</div>
                <div>выезд</div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="lg:text-2xl text-xl text-center text-white uppercase font-ag flex flex-col justify-center gap-x-2">
          <div>Абонемент</div>
          <div>Выгода</div>
          </h3>
          <div class="p-1 flex rounded-2xl from-[#B5F602]  to-[#C8258D] bg-gradient-to-r lg:h-[270px] h-auto mt-4">
            <div class="lg:px-4 px-8 font-semibold rounded-2xl bg-[#1E1D1F] lg:h-[260px] h-auto text-white w-full py-4 text-xl flex flex-col items-center justify-center">
              <div class = "text-center pb-[10px] text-[#B5F602]">3 посещения</div>
              <div class = "grid grid-cols-[repeat(3,1fr)] gap-x-4 gap-y-2 grid-rows-2 pb-[10px]">
                <div>Питбайк</div>
                <div class="text-center">3500</div>
                <div>1000</div>
                <div>Эндуро</div>
                <div class="text-center">5000</div>
                <div>1000</div>
              </div>
              <div class = "text-center pb-[10px] text-[#B5F602]">6 посещений</div>
              <div class = "grid grid-cols-[repeat(3,1fr)] gap-x-4 gap-y-2 grid-rows-2 pb-[10px]">
                <div>Питбайк</div>
                <div class="text-center">6500</div>
                <div>2500</div>
                <div>Эндуро</div>
                <div class="text-center">9500</div>
                <div>2500</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="lg:text-2xl text-xl text-center text-white uppercase font-ag flex lg:flex-col justify-center gap-x-2">
            <div>Сопровождение</div>
            <div>гида</div>
          </h3>
          <div class="p-1 flex rounded-2xl from-[#1096DC]  to-[#C8258D] bg-gradient-to-r lg:h-[270px] h-auto mt-4">
            <div class="px-4 font-semibold rounded-2xl bg-[#1E1D1F] text-white w-full py-4 lg:h-[260px] h-auto text-xl flex justify-center text-center">
              <div class = "flex items-center">
                <p>500 руб.<br>с единицы техники<br>в час</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class = "grid lg:grid-rows-2 lg:grid-cols-2 grid-rows-1 grid-cols-1 text-center mt-10 gap-y-4 lg:gap-x-4">
        <div class ="lg:block hidden row-start-1 row-end-3 col-start-1 col-end-2 bg-[url('/img/prices_1.png')] shadow-[#222123]/50 rounded-2xl bg-center bg-no-repeat bg-[length:100%_100%]"></div>
        <div class = "row-start-1 row-end-2 col-start-2 col-end-3 bg-[#1E1D1F] py-8 lg:px-12 px-8 shadow-lg shadow-[#222123]/50 rounded-2xl">
          <h3 class = "text-4xl uppercase text-[#B5F602] mb-4">Подарочный сертификат</h3>
          <p class = "text-justify text-white ">Задумываетесь, что подарить важному человеку? Часто
            бывает сложно удивить того, у кого, казалось бы, есть
            все. В этом случае сертификат на аренду питбайка -
            уникальная возможность подарить незабываемые
            впечатления. Только представьте это трепетное чувство - 
            оказаться за рулём.</p>
          <button @click="openModal" class="lg:text-xl lg:py-4 py-4 bg-[#B5F602] rounded-full uppercase font-bold mt-[20px] w-[100%]">Заказать сертификат</button>
        </div>
        <div class = "row-start-2 row-end-3 col-start-2 col-end-3 bg-[#1E1D1F] shadow-lg shadow-[#222123]/50 rounded-2xl lg:py-8 lg:px-12">
          <div class="lg:bg-[url('/img/prices_2.png')] bg-[length:100%_100%] lg:h-[100%] h-[200px]">
            <img src = "/img/prices_2.png" class = "lg:hidden block">
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalVue :isOpen="isOpen" @close="closeModal" name="Заказать сертификат" />
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
