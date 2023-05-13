<template>
    <div class="h-60"></div>
    <div class="text-white w-full h-fit ml-20">
        <div class="text-3xl sm:text-5xl md:text-5xl font-semibold mb-5">Projects</div>
        <div v-for="(project, key) in projects" class="">
            <div v-if="key % 2 == 0" class="grid md:grid-cols-2 sm:grid-cols-1 sm:my-[100px] md:my-[300px]">
                <div class="">
                    <div class="text-vueGreen text-2xl font-semibold mb-3">{{ project.title }}</div>
                    <div class="text-lg mr-10 text-justify">{{ project.description }}</div>
                </div>
                <div class="flex justify-center">
                    <div class="relative sm:mt-10 lg:mt-0">
                        <div class="bg-project clip-circle flex justify-center lg:visible md:visible sm:invisible">
                            <img :src="'img/project-preview/' + project['bg-preview-image']">
                        </div>
                        <img class="project-thumbnail border" :src="'img/project-preview/' + project['preview-image']" width="300px">
                    </div>
                </div>
            </div>
            <div v-else class="grid md:grid-cols-2 sm:grid-cols-1 sm:my-[100px] md:my-[300px]">
                <div class="flex justify-center">
                    <div class="relative sm:mt-10 lg:mt-0">
                        <div class="bg-project clip-circle flex justify-center lg:visible md:visible sm:invisible">
                            <img :src="'img/project-preview/' + project['bg-preview-image']">
                        </div>
                        <img class="project-thumbnail border" :src="'img/project-preview/' + project['preview-image']" width="300px">
                    </div>
                </div>
                <div class="">
                    <div class="text-vueGreen text-2xl font-semibold mb-3">{{ project.title }}</div>
                    <div class="text-lg mr-10 text-justify">{{ project.description }}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="h-60"></div>
</template>
<script setup>
import { Projects } from '../db.js';
import { ref } from 'vue';

const projects = ref(Projects);

</script>
<style scoped>


.clip-circle {
    clip-path: circle(200px at center);
    transition: 300ms;
}

.bg-project {
    position: absolute;
    top:-180px;
    left: -80px;
    height: 550px;
    width: 550px;
    z-index: -1;
    opacity: .3;
}

.project-thumbnail {
    height: auto;
    width: 400px;
}

</style>
