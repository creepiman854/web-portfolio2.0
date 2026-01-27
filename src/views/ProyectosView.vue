<template>
  <div  v-if="tablaProyectos" class="h-full border-5">
    <card-component
      v-for="(datos, index) in tablaProyectos.data"
      :key="index"
      :titulo="datos.titulo"
      :fecha="datos.fecha"
      :descripcion="datos.descripcion"
      :portada="datos.portada"
    ></card-component>
  </div>
</template>

<script setup>
import { obtener } from '@/services/gestion'
import { onMounted, ref } from 'vue'
// import CardComponent from '@/components/CardComponent.vue'

const tablaProyectos = ref()

onMounted(async () => {
  tablaProyectos.value = await obtener('proyectos')
  console.log(tablaProyectos.value.data[0])
})
</script>

<style lang="sass" scoped>
@import "@/assets/styles/neumorphic.sass"

.outset
  @include outset
</style>
