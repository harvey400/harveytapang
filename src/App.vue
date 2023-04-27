<template>
  <header>
    <ul>
      <li><router-link :to="{name:'about'}">About</router-link></li>
      <li><router-link :to="{name: 'projects'}">Projects</router-link></li>
    </ul>
  </header>
  
  <main>
    <router-view></router-view>
  </main>
</template>
<script setup>
  import { RouterView, RouterLink } from 'vue-router';
</script>
<style scoped>

</style>
