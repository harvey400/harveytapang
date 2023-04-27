<template>
        <div class="block flex flex-col justify-center space-y-4 h-screen">
            <div class="mx-20">
                <span class="text-gray-300 text-2xl block">Hi, my name is</span>
                <span class="pointer unselectable text-gray-100 text-8xl font-bold green" @click="setName"> {{ fullName }}.</span>
                <span class="block text-gray-300 mt-5 text-5xl font-bold">
                    Web Developer
                </span>
                <span class="w-auto max-w-xl block text-gray-400 mt-5 text-xl">
                    I'm a web developer specializing on building a products for companies ranging from marketing websites to
                    full functional web application to provide client with full user experience
                </span>
            </div>
        </div>
</template>
<script setup>
import {ref, computed} from 'vue';

const firstName = ref("Harvey");
const lastName = ref("Tapang");
const nameChange = ref(1);

const fullName = computed(() => firstName.value + " " + lastName.value);

function setName(){
    if(nameChange.value === 1){
        firstName.value = "Charlene"
        lastName.value = "Cruz"
    } else {
        firstName.value = "Harvey"
        lastName.value = "Tapang"
    }
    nameChange.value *= -1;
}
</script>