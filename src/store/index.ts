import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  persist: true,
  state: () => {
    return { name: 'Maria' }
  },
  getters: {
    getUserName(): string {
      return this.name
    }
  },
  actions: {
    updateUserName(name: string) {
      this.name = name
    }
  }
})