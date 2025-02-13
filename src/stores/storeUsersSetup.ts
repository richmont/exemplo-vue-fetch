import { defineStore } from 'pinia'
import { ref } from 'vue'
export default defineStore('UsersSetup', () => {
  const nationality = ref([])
  const quantity = ref(5)
  const name = ref(null)
  const username = ref(null)
  const address = ref(null)
  const picture = ref(null)
  const finalURL = ref(null)

  function uncheckCheckboxes(classname, checkboxesArray) {
    const checkboxes = document.querySelectorAll(classname)
    checkboxes.forEach((box) => {
      box.checked = false
    })
    /**https://stackoverflow.com/questions/57834381/clearing-an-array-content-and-reactivity-issues-using-vue-js */
    checkboxesArray.splice(0)
  }
  function buildURL() {
    const stringNationality = nationality.value.join()

    this.finalURL =
      'https://randomuser.me/api/?nat=' +
      stringNationality +
      '&results=' +
      quantity.value +
      '&inc=name,login,dob,postcode,picture&format=json'
  }
  return {
    nationality,
    quantity,
    name,
    username,
    address,
    picture,
    finalURL,
    buildURL,
    uncheckCheckboxes
  }
})
