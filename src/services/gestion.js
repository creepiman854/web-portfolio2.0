import { db } from '@/firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export const guardar = async (datos, categoria) => {
  try {
    const docRef = collection(db, categoria)
    const snapshot = await addDoc(docRef, datos)

    console.log(snapshot)
    return{
      ok:true
    }
  } catch (error) {
    console.log(error)

    return {
      ok: false,
    }
  }
}
