import { defineStore } from 'pinia'
import { ref } from 'vue'
import storeUsersSetup from '../stores/storeUsersSetup.ts'
export default defineStore('storeJSONData', () => {
  const usersSetup = storeUsersSetup()

  const BruteJSONData = ref()
  async function getData() {
    //const url = 'https://randomuser.me/api/?nat=BR&results=30&inc=name,login,dob,postcode&format=json'
    try {
      const response = await fetch(usersSetup.finalURL)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const json = await response.json()

      this.BruteJSONData = json.results
    } catch (error) {
      console.error(error.message)
    }
  }
  return { BruteJSONData, getData }
})
