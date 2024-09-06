import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const increment = () => count.value++

  return { count, increment }
})
