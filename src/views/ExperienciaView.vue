<template>
  <section v-if="tablaExperiencia" id="experiencia" class="h-full flex items-center justify-center">
    <div v-for="(datos, index) in tablaExperiencia.data" :key="index">
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

const tablaExperiencia = ref()

onMounted(async () => {
  tablaExperiencia.value = await obtener('experiencia')
  console.log(tablaExperiencia.value.data)
})
</script>

<style lang="sass" scoped></style>
