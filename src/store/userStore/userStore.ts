import type { User } from "./type.d"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("user", () => {
  const userInfo = ref<User>({
    name: '',
    age: 0
  })

  function cleanInfo() {
    userInfo.value = { name: '', age: 0 };
  }

  return { userInfo, cleanInfo }
}, {
  // it's optional only when you need persist storage
  persist: {
    key: 'user',
    storage: localStorage,
  }
})
