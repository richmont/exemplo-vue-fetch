import { defineStore } from 'pinia'
export const useJSONData = defineStore('JSONData', {
  state: () => {
    return {
      data: null
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getData() {
      this.finalURL =
        'https://randomuser.me/api/?nat=BR&results=30&inc=name,login,dob,postcode,picture&format=json'
    }
  }
})
