<script setup lang="ts">
import UserNationality from './ControlPanel/UserNationality.vue'
import UserApplySetupButton from './ControlPanel/UserApplySetupButton.vue'
import UserQuantity from './ControlPanel/UserQuantity.vue'
import storeUsersSetup from '../stores/storeUsersSetup.ts'
const userSetup = storeUsersSetup()
</script>
<template>
  <div class="control-panel-container">
    <p>
      Selecione uma ou várias nacionalidades para os usuários gerados. Selecionar nenhuma deixa
      aleatório
    </p>
    <UserNationality />
    <p>Agora a quantidade de usuários a ser exibida</p>
    <UserQuantity />
    <p>Clique no botão abaixo para confirmar e exibir os usuários</p>
    <UserApplySetupButton />
  </div>
</template>
<style>
.control-panel-container {
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 100%;
  padding: 3em;
  margin-bottom: 10em;
  align-items: center;
}
</style>
