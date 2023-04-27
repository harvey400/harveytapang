<template>
    <div>
       <h1 class="green pointer unselectable" @click="setName"> {{ fullName }}</h1>
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