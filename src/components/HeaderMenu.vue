<template>
  <header class="shadow w-full p-7 flex justify-center items-center z-1">
    <nav class="w-[50%] flex justify-between gap-5">
      <router-link :class="links" to="/">Presentación</router-link>
      <router-link :class="links" to="/proyectos">Proyectos</router-link>
      <router-link :class="links" to="/experiencia">Experiencia</router-link>
      <router-link :class="links" to="/estudios">Estudios</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const links = ref("text-lg transition hover:-translate-y-[3px] hover:text-shadow-md")
</script>

<style lang="sass" scoped>
.shadow
  box-shadow:  10px 10px 20px #bebebe
</style>
