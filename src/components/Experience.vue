<template>
    <div class="h-60">
    </div>
    <h1 class="text-white w-full h-fit ml-20">
        <div class="text-3xl md:text-5xl sm:text-5xl font-semibold mb-5">Experience</div>
        <div v-for="(experience, key) in experiences">
            <div class="flex h-48">
                <div class="">
                    <div class="line-experience bg-gray-400">
                    </div>
                    <div class="circle-experience" :class="{current: isCurrent(key)}" >
                    </div>
                </div>
                <div class="ml-4 flex flex-col justify-center h-full">
                    <div class="text-xl">{{ experience.name }}</div>
                    <div class="text-md text-gray-400">{{ experience.role }}</div>
                    <div class="text-l text-gray-400 italic">{{ experience.years }}</div>
                </div>
            </div>
        </div>
    </h1>
</template>
<script setup>
import { Experience } from '../db.js';
import { ref, computed} from 'vue';

const experiences = computed(()=> Experience.reverse())

const isCurrent = ref((key) => {
    if (key === 0) {
        return true;
    }
})


</script>
<style scoped>
.line-experience {    
    position: relative;
    top:0px;
    left:0px;
    margin-left: 6px;
    width: 2px;
    height: 100%;
}

.circle-experience.current {
    background-color: hsla(160, 100%, 37%, 1);
}


.circle-experience:not(.current) {
    background-color: #0a192f;
}

.circle-experience {
    position: relative;
    top:-53%;
    left:0px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: white 2px solid;

}

</style>