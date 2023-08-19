<template>
  <div class="bg-primary py-12 px-6 laptop:py-24 laptop:px-36 p-[100px]">
    <div class="mb-10 laptop:mb-20 laptop:grid grid-cols-2">
      <div class="flex flex-col items-start justify-start pr-20">
        <p class="text-24 font-extrabold text-white mb-4">Thriftmee Company</p>
        <p class="font-medium text-16 text-white opacity-60 mb-6">
          Kami dengan bangga memperkenalkan Thriftmee, sebuah inovasi revolusioner dalam dunia e-commerce yang berfokus pada barang lokal, terutama thrift lokal. Kami adalah agen perubahan yang kuat dalam mendukung pertumbuhan Usaha Mikro, Kecil, dan Menengah (UMKM) serta mengangkat potensi Ekonomi Kreatif Lokal ke tingkat yang lebih tinggi.
        </p>
      </div>
      <div class="grid grid-cols-3">
        <div class="col-span-1 w-full">
          <p class="uppercase text-16 font-bold opacity-60 text-white mb-6">Quick Links</p>
          <ul>
            <li class="font-bold text-white text-16 mb-4">
              <a href="/#ar">AR Thrift Lokal</a>
            </li>
            <li class="font-bold text-white text-16 mb-4">
              <a href="/#vak">Produk Lokal</a>
            </li>
            <li class="font-bold text-white text-16 mb-4">
              <router-link to="/">Why Thriftmee?</router-link>
            </li>
            <li class="font-bold text-white text-16 mb-4">
              <a href="/#team">The Team</a>
            </li>
          </ul>
        </div>
        <div class="col-span-2 w-full">
          <p class="uppercase text-16 font-bold opacity-60 text-white mb-2">Contact & Information</p>
          <div class="flex items-start justify-start mb-4">
          </div>
          <ul>
            <li class="flex items-center justify-start font-bold text-white text-16 mb-4 w-full">
              <img src="/assets/icons/mail.svg" alt="email-icon"  class="h-[25px] w-[30px]">
              <p>thriftmee.ofc@gmail.com</p>
            </li>
            <li class="flex items-center justify-start font-bold text-white text-16 mb-4 w-full">
              <img src="/assets/icons/instragram-icons.png" alt="instragram-icons" class="h-[25px] w-[30px]">
              <p>@thriftmee.ofc</p>
            </li>
            <li class="flex items-center justify-start font-bold text-white text-16 mb-4 w-full">
              <img src="/assets/icons/tiktok.webp" alt="@ tiktok-icon" class="h-[25px] w-[30px]">
              <p>thriftmee.ofc</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-16 laptop:text-16 font-medium text-white opacity-60 text-center">©2023 Powered by Thriftmee Company</p>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>