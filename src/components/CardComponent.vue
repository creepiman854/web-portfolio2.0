<template>
  <section id="proyectos" class="h-full flex justify-center p-20">
    <div class="outset flex flex-col p-15 gap-5">
      <div>
        <span class="text-5xl font-black">{{ titulo }}</span>
        <span>{{ fecha }}</span>
      </div>
      <div class="flex gap-5">
        <p>{{ descripcion }}</p>
        <img :src="portada" alt="Portada" class="w-[50%] h-auto" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  titulo: String,
  fecha: Date,
  descripcion: String,
  portada: String,
})
</script>

<style lang="sass" scoped></style>
