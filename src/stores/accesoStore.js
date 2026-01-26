import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAccesoStore = defineStore('acceso', () => {
  const admin = ref(false)

  const setAdmin = (newValue) => {
    admin.value = newValue
  }


  return { admin, setAdmin }
})
