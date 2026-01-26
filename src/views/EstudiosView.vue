<template>
  <section id="estudios"></section>
</template>

<script setup>
import { obtener } from '@/services/gestion'
import { onMounted, ref } from 'vue'

const tablaEstudios = ref()

onMounted(async () => {
  tablaEstudios.value = await obtener('estudios')
  console.log(tablaEstudios.value.data)
})
</script>

<style lang="sass" scoped></style>
