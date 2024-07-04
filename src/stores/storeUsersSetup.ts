import { defineStore } from 'pinia'
//https://randomuser.me/api/?nat=BR&results=30&inc=name,login,dob,postcode,picture&format=json
export const useUsersSetup = defineStore('UsersSetup', {
  state: () => {
    return {
      nationality: [],
      quantity: 30,
      name: true,
      username: true,
      address: true,
      picture: true,
      finalURL: null
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    buildURL() {
      this.finalURL =
        'https://randomuser.me/api/?nat=BR&results=30&inc=name,login,dob,postcode,picture&format=json'
    }
  }
})
