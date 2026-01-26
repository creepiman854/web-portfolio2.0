<template>
  <main class="h-screen flex flex-col">
    <HeaderMenu></HeaderMenu>
    <section class="flex-1 overflow-auto">
      <router-view></router-view>
    </section>
  </main>
</template>

<script setup>
import HeaderMenu from './components/HeaderMenu.vue'
</script>

<style lang="sass" scoped>
*
  background: #e9e9e9;

</style>
