<!-- src\Search\index.vue -->

<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="query" placeholder="Search here" />
    <button type="submit">Go!</button>
  </form>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>