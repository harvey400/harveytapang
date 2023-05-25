<template>
    <div class="h-60"></div>
    <div class="text-white w-full h-fit ml-20">
        <div class="text-3xl sm:text-5xl md:text-5xl font-semibold mb-5">Projects</div>
        <a :href="project.link" target="_blank" v-for="(project, key) in projects" class="pointer" @mouseenter="toggleProjectBg(key,1)" @mouseleave="toggleProjectBg(key,0)" >
            <div class="grid md:grid-cols-2 sm:grid-cols-1 sm:my-[100px] md:my-[300px]">
                <div class="">
                    <div class="text-vueGreen text-2xl font-semibold mb-3">{{ project.title }}</div>
                    <div class="text-lg mr-10 text-justify">{{ project.description }}</div>
                </div>
                <div class="flex justify-center">
                    <div class="relative sm:mt-10 lg:mt-0">
                        <div :id="'bg-project-' + key" class="bg-project flex justify-center lg:visible md:visible sm:invisible">
                            <img :src="'img/project-preview/' + project['bg-preview-image']">
                        </div>
                        <img class="project-thumbnail border" :src="'img/project-preview/' + project['preview-image']" width="300px">
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="h-60"></div>
</template>
<script setup>
import { Projects } from '../db.js';
import { ref, onMounted} from 'vue';

const projects = ref(Projects);

const toggleProjectBg = (key,value) => {
    let bgProject = document.querySelector('#bg-project-' + key).classList;
    if (value) {
        bgProject.add('clip-circle');
    } else {
        bgProject.remove('clip-circle');
    }
}

onMounted(()=> {
    
});

</script>
<style scoped>

.clip-circle {
    transition: 1s ease-in;
    clip-path: circle(400px at center) !important;
}

.bg-project {
    position: absolute;
    top:-180px;
    left: -80px;
    height: 550px;
    width: 550px;
    z-index: -1;
    transition: 1s ease-out;
    clip-path: circle(0px at center);
    opacity: .3;
}

.project-thumbnail {
    height: auto;
    width: 400px;
}

</style>
