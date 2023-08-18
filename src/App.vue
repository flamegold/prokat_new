<template>
  <div class="overflow-hidden">
    <HeaderVue />
  <div class="bg-[url(/img/fon.png)] bg-center bg-no-repeat bg-[length:100%_100%]">
    <div class = "bg-[url('/img/fon_1.png')] bg-center bg-no-repeat  bg-[length:100%_100%]">
    <BlockInfoVue />
    <BlockInfoVueTwo />
    <PricesVue />
    <VideosVue />
    <ContactsVue />
    <Faq />
    <GalleryVue />
    <FooterVue />
  </div>
</div>
  </div>
</template>

<script setup>
import HeaderVue from './components/Header.vue'
import BlockInfoVue from './components/BlockInfo.vue'
import BlockInfoVueTwo from './components/BlockInfoTwo.vue'
import PricesVue from './components/Prices.vue'
import Faq from './components/Faq.vue'
import ServicesVue from './components/Services.vue'
import VideosVue from './components/Videos.vue'
import GalleryVue from './components/Gallery.vue'
import ContactsVue from './components/Contacts.vue'
import FooterVue from './components/Footer.vue'
</script>

<style>

</style>
