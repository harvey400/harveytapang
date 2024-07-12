<template>
    <div class="h-60"></div>
    <div class="text-white w-full h-fit ml-20">
        <div class="text-3xl sm:text-5xl md:text-5xl font-semibold mb-5">Projects</div>
        <a :href="project.link" target="_blank" v-for="(project, projectKey) in projects" class="pointer" @mouseenter="toggleProjectBg(projectKey,1)" @mouseleave="toggleProjectBg(projectKey,0)" >
            <div class="grid md:grid-cols-2 sm:grid-cols-1 sm:my-[100px] md:my-[300px]">
                <div class="">
                    <div class="text-vueGreen text-2xl font-semibold mb-3">{{ project.title }}</div>
                    <div class="text-lg mr-10 text-justify">{{ project.description }}</div>
                </div>
                <div class="flex justify-center">
                    <div class="relative sm:mt-10 lg:mt-0">
                        <div :id="'bg-project-' + projectKey" class="bg-project flex justify-center lg:visible md:visible sm:invisible">
                            <img :src="'img/project-preview/' + project['bg-preview-image']">
                        </div>
                        <div class="project-thumbnail-container m-5">
                            <img class="project-thumbnail border project-thumbnail-hide" :class="'project-thumbnail-' + projectKey" v-for="previewImage in project['preview-images']" :src="'img/project-preview/' + previewImage">
                        </div>
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

let stopTransition;

const toggleProjectBg = (key,value) => {
    let bgProject = document.querySelector('#bg-project-' + key).classList;
    if (value) {
        bgProject.add('clip-circle');
        previewImages(key)

    } else {
        bgProject.remove('clip-circle');
        clearInterval(stopTransition);
        resetPreviewImages(key)
    }
}

//Start animation on preview image
let previewImages = (projectKey) => {
    let pt = document.querySelectorAll('.project-thumbnail-' + projectKey);
    let currentKey = pt.length == 1 ? 0 : 1;
    
    stopTransition = setInterval(() => {
        pt.forEach((element,key) => {
            if(key == currentKey){
                pt[key].classList.add('project-thumbnail-show')
                pt[key].classList.remove('project-thumbnail-hide')
            } else {
                pt[key].classList.add('project-thumbnail-hide')
                pt[key].classList.remove('project-thumbnail-show')
            }
        });
        currentKey++;
        if(currentKey >= pt.length)  currentKey = 0;
    }, 1500);
}

//reset animation on preview image
let resetPreviewImages = (key) => {
    let pt = document.querySelectorAll('.project-thumbnail-' + key);
    let currentKey = 0;
    pt.forEach((element,key) => {
            if(key == currentKey){
                pt[key].classList.add('project-thumbnail-show')
                pt[key].classList.remove('project-thumbnail-hide')
            } else {
                pt[key].classList.add('project-thumbnail-hide')
                pt[key].classList.remove('project-thumbnail-show')
            }
        });
}

let initialize = () =>{
    Projects.forEach((element,key) => {
        let pt = document.querySelectorAll('.project-thumbnail-' + key);
        pt[0].classList.add('project-thumbnail-show')
        pt[0].classList.remove('project-thumbnail-hide')
    })
}

onMounted(()=> {
    initialize();
});

</script>
<style scoped>

.clip-circle {
    transition: .75s ease-in;
    clip-path: circle(400px at center) !important;
}

.bg-project {
    position: absolute;
    top:-180px;
    left: -80px;
    height: 550px;
    width: 550px;
    z-index: -1;
    transition: .75s ease-out;
    clip-path: circle(0px at center);
    opacity: .3;
}

.project-thumbnail {
    height: 240px;
    width: 400px;
    position: absolute;
}

.project-thumbnail-container{
    width: 400px;
    height: 235px;
}

.project-thumbnail-hide {
    transition: 1s ease-in;
    opacity: 0;
}

.project-thumbnail-show {
    transition: 1s ease-in;
    opacity: 1;
}
</style>
