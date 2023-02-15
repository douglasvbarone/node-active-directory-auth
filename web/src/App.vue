<script setup></script>

<template>
  <ul>
    <li><router-link to="/home">Home</router-link></li>
    <li><router-link to="/public">Public Info</router-link></li>
    <li><router-link to="/private">Private Info</router-link></li>
  </ul>
  <router-view />
</template>

<style scoped></style>
