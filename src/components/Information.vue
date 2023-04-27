<script setup>
import {ref, computed} from "vue"
const firstName = ref("Charlene")
const lastName = ref("Cruz");

const fullName = computed(()=> firstName.value + " " + lastName.value);

function test() {
    firstName.value = "Harvey"
    lastName.value = "Tapang"
}

</script>
<template>
    <div>
        Developer <h1 class="green">{{ fullName }}</h1>
        <button @click="test">Change Name</button>
    </div>
</template>

<style scoped>

</style>