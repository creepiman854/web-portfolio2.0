<template>
  <section id="acceso" class="h-full flex justify-center items-center">
    <div class="outset h-100 w-100 flex flex-col justify-between p-15">
      <h2 class="font-bold text-2xl text-left">Acceder a la gestión</h2>
      <p>Escribe la contraseña para acceder al panel de administración</p>
      <input type="password" v-model="inputPasswd" class="inset p-5 outline-none" />
      <button @click="getAccess" class="btn hoverable cursor-pointer">Acceder</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
import { useAccesoStore } from '@/stores/accesoStore'

const accesoStore = useAccesoStore()
const password = 'admin'
const inputPasswd = ref('')

const getAccess = () => {
  if (inputPasswd.value == password) {
    accesoStore.setAdmin(true)
    router.push('/gestion')
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/styles/neumorphic.sass"

.outset
  @include outset

input
  @include inset

button
  @include button

</style>
