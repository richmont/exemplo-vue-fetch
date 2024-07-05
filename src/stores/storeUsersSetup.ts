import { defineStore } from 'pinia'
import { ref } from 'vue'
export default defineStore('UsersSetup', () => {
  const nationality = ref([])
  const quantity = ref(30)
  const name = ref(true)
  const username = ref(true)
  const address = ref(true)
  const picture = ref(true)
  const finalURL = ref(null)

  function buildURL() {
    const stringNationality = nationality.value.join()

    this.finalURL =
      'https://randomuser.me/api/?nat=' +
      stringNationality +
      '&results=30&inc=name,login,dob,postcode,picture&format=json'
  }
  return { nationality, quantity, name, username, address, picture, finalURL, buildURL }
})
