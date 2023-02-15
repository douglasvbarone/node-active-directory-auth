<script setup>
import { useAuth } from './composables/useAuth'

const { user, logout } = useAuth()
</script>

<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/public">Public Info</router-link></li>
    <li v-if="user"><router-link to="/protected">Private Info</router-link></li>
    <li v-if="user"><a href="#" @click="logout">Logout</a></li>
    <li v-else><router-link to="/login">Login</router-link></li>
  </ul>
  <router-view />
</template>

<style scoped></style>
