<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <router-link to="/"><button class="btn btn-ghost text-xl">Accueil</button></router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/exercice">Exercice</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'


</script>

<style scoped lang="css">
</style>