<template>
  <section id="gestion" class="h-full flex items-center justify-center">
    <form @submit.prevent="add">
      <input type="text" v-model="titulo" placeholder="Introduce un título" required />
      <textarea v-model="descripcion" placeholder="Describe" required></textarea>
      <input type="date" v-model="fecha" required />
      <select v-model="categoria" required>
        <option value="" selected hidden disabled>Selecciona una categoría</option>
        <option value="proyectos">Proyectos</option>
        <option value="experiencia">Experiencia</option>
        <option value="estudios">Estudios</option>
      </select>
      <input type="text" v-model="portada" placeholder="URL de la imágen">
      <button>Agregar</button>
    </form>
  </section>
</template>

<script setup>
import { guardar } from '@/services/gestion'
import { ref } from 'vue'

const titulo = ref('')
const descripcion = ref('')
const fecha = ref('')
const categoria = ref('')
const portada = ref("")

const add = () => {
  let datos = {
    titulo: titulo.value,
    descripcion: descripcion.value,
    fecha: fecha.value,
    portada: portada.value,
   }

  guardar(datos, categoria.value)
}
</script>

<style lang="sass" scoped>
@import "@/assets/styles/neumorphic.sass"

form
  @include outset

input
  @include inset
</style>
