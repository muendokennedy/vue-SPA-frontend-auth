import { defineStore } from "pinia";

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user){
      this.user = user
    }
  }
})


export default useAuthStore