import { db } from '@/firebase/config'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export const guardar = async (datos, categoria) => {
  try {
    const docRef = collection(db, categoria)
    const snapshot = await addDoc(docRef, datos)

    console.log(snapshot)
    return {
      ok: true,
    }
  } catch (error) {
    console.log(error)

    return {
      ok: false,
    }
  }
}

export const obtener = async (categoria) => {
  try {
    const docRef = collection(db, categoria)
    const consulta = await getDocs(docRef)

    const datos = []

    consulta.forEach(doc => {
      datos.push(doc.data())
    })

    if (consulta) {
      return {
        ok: true,
        data: datos,
      }
    }
  } catch (error) {
    console.log(error)

    return{
      ok:false
    }
  }
}
