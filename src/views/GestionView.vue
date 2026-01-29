<template>
  <section id="gestion" class="p-15 h-full gap-15 flex items-center justify-center">
    <form
      @submit.prevent="add"
      class="h-full w-[50%] min-w-135 min-h-[635px] p-15 flex flex-col gap-5 justify-between"
    >
      <div class="flex flex-col gap-5 h-full">
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
        <div class="h-full flex flex-col gap-1 min-h-0">
          <label for="">Descripción</label>
          <QuillEditor v-model:content="descripcion" content-type="html" theme="snow" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="">Portada</label>
          <input type="text" v-model="portada" placeholder="URL de la imágen" />
        </div>
      </div>
      <button class="hoverable h-20 font-semibold text-2xl">Agregar</button>
    </form>

    <div class="w-[50%] flex justify-center items-center">
      <!-- CARTA DE PROYECTOS -->
      <div
        v-if="categoria == 'proyectos'"
        class="preview w-full h-full p-15 gap-10 flex flex-col overflow-auto"
      >
        <div>
          <h1 class="text-5xl font-bold">{{ titulo }}</h1>
          <span class="font-thin">{{ fecha }}</span>
        </div>
        <div class="flex flex-col h-full gap-5">
          <section v-html="descripcionSegura"></section>
          <img :src="portada" alt="" class="object-cover" />
        </div>
      </div>

      <!-- CARTA DE ESTUDIOS -->
      <div v-if="categoria == 'estudios'" class="preview w-120 h-150 flex flex-col overflow-auto">
        <img :src="portada" alt="Portada" class="object-cover h-[40%]" />
        <div class="p-10 flex flex-col flex-1 h-full gap-5">
          <div class="flex flex-col">
            <h1 class="!m-0 font-bold w-full m-0 text-5xl line-clamp-3">{{ titulo }}</h1>
            <span class="font-thin">{{ fechaFormateada }}</span>
          </div>
          <section class="h-full border overflow-hidden" v-html="descripcionSegura"></section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { guardar } from '@/services/gestion'
import { ref } from 'vue'
import DOMPurify from 'dompurify'
import { computed } from 'vue'

const date = new Date()

// Función para formatear la fecha a YYYY-MM-DD
const currentDate = date.toISOString().split('T')[0]

const titulo = ref('Título de ejemplo')
const descripcion = ref(
  'officia cupidatat dolore consectetur qui dolor veniam ex minim dolore dolore magna sit ipsum ut id Lorem nisi qui velit',
)
const fecha = ref(currentDate)
const categoria = ref('estudios')
const portada = ref(
  'https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg',
)

const fechaFormateada = computed(() => {
  if (!fecha.value) return ''
  const [year, month, day] = fecha.value.split('-')
  return `${day}/${month}/${year}`
})

const descripcionSegura = computed(() => DOMPurify.sanitize(descripcion.value))

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

// ESTILOS QUILL
:deep(.ql-toolbar)
  @include outset(sm)
  display: flex
  border-radius: 15px 15px 0 0
  margin-bottom: -4px
  justify-content: center
  align-items: center
  border: none
  z-index: 1
  overflow: inherit


:deep(.ql-container)
  @include inset(sm)
  border-radius: 0 0 15px 15px
  border: none
  z-index: 0
  overflow-y: auto
  height: 0
  flex: 1 1 auto


:deep(.ql-picker-options)
  background: #e9e9e9
  border-radius: 15px
  box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff
  overflow: hidden

:global(.preview h1)
  font-size: 2rem
  font-weight: bold
  margin-bottom: 1rem

:global(.preview h2)
  font-size: 1.5rem
  font-weight: bold
  margin-bottom: 0.8rem

:global(.preview ul)
  list-style-type: disc
  padding-left: 2rem
  margin-bottom: 1rem

:global(.preview ol)
  list-style-type: decimal
  padding-left: 2rem
  margin-bottom: 1rem

:global(.preview li)
  margin-bottom: 0.5rem

// OTROS ESTILOS
form
  @include outset

.preview
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
