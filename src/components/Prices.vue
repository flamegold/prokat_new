<template>

  <div class="/bg-[url('/img/fon_2.png')] bg-center bg-no-repeat bg-[length:100%_100%]">
    <div class="container mx-auto pb-[150px] py-4">
      <div class="lg:flex justify-center items-center mb-7">
        <div class="text-center">
          <h2 class="text-6xl font-extrabold leading-tight mb-5 uppercase text-white">
            Цены
          </h2>
        </div>
      </div>
      <div class="relative grid grid-cols-3 justify-between  pt-[50px] gap-x-10">
        <div>
          <h3 class="text-[1.6em] text-center text-white  uppercase font-ag">
          1 час<br>последующие
          </h3>
          <div class="p-1 rounded-2xl from-[#13DDB2]  to-[#B5F602] bg-gradient-to-r h-[300px] mt-4">
            <div class="px-4 font-semibold rounded-2xl bg-[#1E1D1F] text-white h-[290px] w-full py-[30px] text-[1.4em]">
              <div class = "grid grid-cols-[1fr,1fr,1fr] grid-rows-4 pb-[10px] gap-x-4 gap-y-2">
                <div>Питбайк</div>
                <div>1500</div>
                <div>1000</div>
                <div>Эндуро</div>
                <div>2000</div>
                <div>1500</div>
                <div>Квадрик</div>
                <div>2000</div>
                <div>1500</div>
                <div>Мотоботы</div>
                <div>500</div>
                <div>выезд</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-[1.6em] text-center text-white uppercase font-ag">
          Абонемент<br>Выгода
          </h3>
          <div class="p-1 rounded-2xl from-[#B5F602]  to-[#C8258D] bg-gradient-to-r h-[300px] mt-4">
            <div class="px-4 font-semibold rounded-2xl bg-[#1E1D1F] h-[290px] text-white w-full py-[10px] text-[1.4em]">
              <div class = "text-center pb-[10px] text-[#B5F602]">3 посещения</div>
              <div class = "grid grid-cols-[repeat(3,1fr)] gap-x-4 gap-y-2 grid-rows-2 pb-[10px]">
                <div>Питбайк</div>
                <div>3500</div>
                <div>1000</div>
                <div>Эндуро</div>
                <div>5000</div>
                <div>1000</div>
              </div>
              <div class = "text-center pb-[10px] text-[#B5F602]">6 посещений</div>
              <div class = "grid grid-cols-[repeat(3,1fr)] gap-x-4 gap-y-2 grid-rows-2 pb-[10px]">
                <div>Питбайк</div>
                <div>6500</div>
                <div>2500</div>
                <div>Эндуро</div>
                <div>9500</div>
                <div>2500</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-[1.6em] text-center text-white uppercase font-ag">
          Сопровождение<br>гида
          </h3>
          <div class="p-1 rounded-2xl from-[#1096DC]  to-[#C8258D] bg-gradient-to-r h-[300px] mt-4">
            <div class="px-4 font-semibold rounded-2xl bg-[#1E1D1F] text-white w-full py-[30px] h-[290px] text-[1.4em] flex justify-center text-center">
              <div>500 руб.<br>с единицы техники<br>в час</div>
            </div>
          </div>
        </div>
      </div>
      <div class = "grid grid-rows-2 grid-cols-2 text-center mt-10 gap-y-4 gap-x-4">
        <div class = "row-start-1 row-end-3 col-start-1 col-end-2 bg-[url('/img/prices_1.png')] shadow-[#222123]/50 rounded-2xl bg-center bg-no-repeat bg-[length:100%_100%]"></div>
        <div class = "row-start-1 row-end-2 col-start-2 col-end-3 bg-[#1E1D1F] py-8 px-12 shadow-lg shadow-[#222123]/50 rounded-2xl">
          <h3 class = "text-4xl uppercase text-[#B5F602]">Подарочный сертификат</h3>
          <p class = "text-justify text-white text-xl">Задумываетесь, что подарить важному человеку? Часто
            бывает сложно удивить того, у кого, казалось бы, есть
            все. В этом случае сертификат на аренду питбайка -
            уникальная возможность подарить незабываемые
            впечатления. Только представьте это трепетное чувство - 
            оказаться за рулём.</p>
          <button class="px-[40px] py-[10px] bg-[#B5F602] rounded-full uppercase font-bold mt-[20px]">Заказать сертификат</button>
        </div>
        <div class = "row-start-2 row-end-3 col-start-2 col-end-3 bg-[#1E1D1F] shadow-lg shadow-[#222123]/50 rounded-2xl py-8 px-12">
          <div class="bg-[url('/img/prices_2.png')] bg-[length:100%_100%] h-[100%]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>

</style>
