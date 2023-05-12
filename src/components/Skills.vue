<template>
    <div class="text-white ml-20 flex h-fit mx-auto w-full flex flex-col">
        <div class="w-20  block text-3xl font-semibold text-3xl md:text-5xl sm:text-5xl">Skills</div>
        <div class="md:w-full sm:w-full lg:w-1/2 grid grid-cols-2 gap-6 mt-5 text-xl">
            <a v-for="skill in skills" class="flex pointer group" :href = "skill.link" target="_blank">
                <div class="inline transition ease-in-out group-hover:scale-125 duration-300">
                    <img src="@/assets/img/logo/laravel.png" height="40" width="40">
                </div>
                <div class="ml-2 transition ease-in-out group-hover:text-vueGreen duration-300">{{ skill.name }}</div>
            </a>
        </div>
    </div>
</template>
<script setup>
import { Skills } from '../db.js';
import { ref } from 'vue';

const skills = ref(Skills);

const getImagePath  = (imageName) => {
    return new URL ('@/assets/img/logo', import.meta.url).href + '/' + imageName
    // return '@/assets/img/logo/' + imageName
}

</script>