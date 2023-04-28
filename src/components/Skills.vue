<template>
    <div class="text-white ml-20 flex h-screen mx-auto w-full flex flex-col">
        <div class="w-20  block text-3xl font-semibold">Skills</div>
        <div class="md:w-full sm:w-full lg:w-1/2 grid grid-cols-2 gap-6 mt-5 text-xl">
            <div class="flex pointer group">
                <div class="inline transition ease-in-out group-hover:scale-110 duration-300">
                    <img src = "@/assets/logo.svg" height="40" width="40">
                </div>
                <div class="ml-2 transition ease-in-out group-hover:text-vueGreen duration-300">Laravel</div>
            </div>
            <div class="flex pointer group">
                <div class="inline transition ease-in-out group-hover:scale-110 duration-300">
                    <img src = "@/assets/logo.svg" height="40" width="40">
                </div>
                <div class="ml-2 transition ease-in-out group-hover:text-vueGreen duration-300">Vue JS</div>
            </div>
            <div class="flex pointer group">
                <div class="inline transition ease-in-out group-hover:scale-110 duration-300">
                <img src = "@/assets/logo.svg" height="40" width="40">
                </div>
                <div class="ml-2 transition ease-in-out group-hover:text-vueGreen duration-300">Javascript</div>
            </div>
            <div class="flex pointer group">
                <div class="inline transition ease-in-out group-hover:scale-110 duration-300">
                    <img src = "@/assets/logo.svg" height="40" width="40">
                </div>
                <div class="ml-2 transition ease-in-out group-hover:text-vueGreen duration-300">Bootstrap CSS</div>
            </div>
            <div class="flex pointer group">
                <div class="inline transition ease-in-out group-hover:scale-110 duration-300">
                    <img src = "@/assets/logo.svg" height="40" width="40">
                </div>
                <div class="ml-2 transition ease-in-out group-hover:text-vueGreen duration-300">Tailwind CSS</div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>