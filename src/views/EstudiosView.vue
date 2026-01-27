<template>
  <section v-if="tablaEstudios" id="estudios" class="h-full flex items-center justify-center ">
    <div v-for="(datos, index) in tablaEstudios.data" :key="index">
      {{ datos.titulo }}
      {{ datos.portada }}
      {{ datos.fecha }}
      {{ datos.descripcion }}
    </div>
  </section>
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
