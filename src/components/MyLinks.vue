<template>
    <div class=" text-white flex justify-end mr-10 my-10">
        <a class="mx-3 text-white hover:text-vueGreen" title="Resume" target="_blank" :href="links.resume.url">
            <font-awesome-icon :icon="['fas','file']" size="2x"/>
        </a>
        <a class="mx-3 text-white hover:text-vueGreen" title="Github" target="_blank" :href="links.github.url">
            <font-awesome-icon :icon="['fab','github']" size="2x"/>
        </a>
        <a class="ml-3 text-white hover:text-vueGreen" title="LinkedIn" target="_blank" :href="links.linkedin.url">
            <font-awesome-icon :icon="['fab','linkedin']" size="2x"/>
        </a>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Links } from '../db';

const links = ref(Links);

</script>