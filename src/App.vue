<template>
  <header>
    <ul class="nav">
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
  ul {
    list-style-type:none;
    margin:0;
    padding:0;
    overflow:hidden;
    background-color: #333;

  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.router-link-active) {
    background-color: #111;
  }

  .router-link-active {
    background-color:hsla(160, 100%, 37%, 1);;
  }

</style>
