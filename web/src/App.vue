<script setup>
import { useAuth } from './composables/useAuth'

const { user, logout } = useAuth()
</script>

<template>
  <div class="container">
    <ul class="top-menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/public">Public Info</router-link></li>
      <li :class="{ inactive: !user }">
        <router-link to="/protected">Protected Info</router-link>
      </li>
      <li v-if="user"><a href="#" @click="logout">Logout</a></li>
      <li v-else><router-link to="/login">Login</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<style scoped>
li.inactive a {
  color: #ccc;
  text-decoration: line-through;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;

  display: flex;

  flex-direction: column;

  background-color: #fbfbfb;
  border-radius: 10px;

  align-items: center;
}

.container > * {
  width: 100%;
}

.top-menu {
  display: flex;
  list-style: none;
  padding: 0;
}

.top-menu li {
  margin-right: 1em;
}

.top-menu a {
  text-decoration: none;
  padding: 0.5em;
}

.top-menu a:hover {
  text-decoration: underline;
}

.top-menu a:visited {
  text-decoration: none;
}
</style>
