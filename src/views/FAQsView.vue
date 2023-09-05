<template>
    <div class="px-6 py-20 laptop:px-40 laptop:py-40">
        <p class="text-center font-bold text-16 mb-5 laptop:text-40 laptop:mb-12">Frequently Asked Question</p>
        
        <div class="bg-gradient-to-r from-white via-primary to-white h-[1px] hidden laptop:block mt-7 mb-24 laptop:mb-14"></div>

        <div class="flex flex-col items-center justify-center w-full mb-12">

            <div v-for="{ name, description, url }, index in services" :key="index" class="mb-4 w-full border rounded-lg">
                <button
                    class="flex items-center justify-between text-left bg-white rounded-md py-4 px-8 w-full laptop:px-8 laptop:py-4"
                    type="button" data-te-collapse-init :data-te-target="`#collapse-${index}`" data-te-ripple-init
                    data-te-ripple-color="light" aria-expanded="false" :aria-controls="`collapse-${index}`">
                    <p class="laptop:text-h-4 capitalize font-bold">{{ name }}</p>
                    <img src="/assets/icons/arrow-down.png" alt="arrow-down">
                </button>
                <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item
                    :id="`collapse-${index}`">
                    <div class="block rounded-lg bg-white p-8 rounded-t-none laptop:text-h-4">
                        {{ description }}
                        <div v-if="url" class="mt-4">
                            Link: <a :href="url" target="_blank" class="text-primary">{{ url }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import {
    Collapse,
    initTE,
} from "tw-elements";

export default {
    name: 'ServiceView',
    data() {
        return {
            services: [
                {
                    name: 'Bagaimana cara menghapus akun saya dari Thriftmee?',
                    description: 'Untuk menghapus akun Anda, silakan mengirimkan email ke alamat email kami di bawah ini. Sertakan username, email, serta alasan penghapusan akun anda. Kami akan menghapus akun Anda dalam waktu 24 jam. Adapun data yang akan dihapus adalah data yang Anda masukkan saat mendaftar, seperti nama, email, dan username. Data yang Anda masukkan saat membuat postingan tidak akan dihapus.',
                    url: 'mailto:thriftmee.ofc@gmail.com'
                }
            ]
        }
    },
    mounted() {
        initTE({ Collapse });
    }
}
</script>
  
<style></style>