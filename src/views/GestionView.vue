<template>
  <section id="gestion" class="h-full flex items-center justify-center">
    <form
      @submit.prevent="add"
      class="h-[80%] w-[60%] min-w-143.75 p-20 flex flex-col gap-5 justify-between"
    >
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-1">
          <label for="">Titulo</label>
          <input type="text" v-model="titulo" placeholder="Introduce un título" required />
        </div>
        <div class="flex w-full justify-between gap-5">
          <div class="flex flex-col gap-1 w-full">
            <label for="">Fecha de creación</label>
            <input type="date" v-model="fecha" required class="date" />
          </div>
          <div class="flex flex-col gap-1 w-full">
            <label for="">Categoría</label>
            <select v-model="categoria" required>
              <option value="" selected hidden disabled>Selecciona una categoría</option>
              <option value="proyectos">Proyectos</option>
              <option value="experiencia">Experiencia</option>
              <option value="estudios">Estudios</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label for="">Descripción</label>
          <textarea
            v-model="descripcion"
            placeholder="Añade una descripción"
            required
            class="h-30 p-5"
          ></textarea>
        </div>
        <div class="flex flex-col gap-1">
          <label for="">URL de la imágen</label>
          <input type="text" v-model="portada" placeholder="URL de la imágen" />
        </div>
      </div>
      <button class="hoverable h-full font-semibold text-2xl">Agregar</button>
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
const portada = ref('')

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

input, textarea
  @include inset(sm)
  padding: 1rem
  border-radius: 15px
  resize: none

.date
  @include outset(sm)
  border-radius: 15px

select
  @include outset(sm)
  padding: 1rem
  border-radius: 15px

button
  @include button
</style>
