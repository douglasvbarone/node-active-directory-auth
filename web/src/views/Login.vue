<template>
  <div>
    <h1>Login</h1>
    <p v-if="user">You are logged in as {{ user }}</p>
    <form v-else @submit.prevent="handleLogin">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
    <div v-if="error">Error: {{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

const username = ref('')
const password = ref('')

const { login, user, error } = useAuth()

function handleLogin() {
  try {
    login(username.value, password.value)
  } catch (err) {
    alert(err.message)
  }
}
</script>
