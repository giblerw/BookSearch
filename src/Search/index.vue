<!-- src\Search\index.vue -->

<template>
  <div class="search-bar-container">
    <form v-on:submit.prevent="onSubmit">
      <input type="search" v-model="query" placeholder="Search here" />
      <i class="fa fa-search"><button id="search-submit" type="submit"></button></i>            
    </form>  
    <sort-by :sortBy="onSortChange" :query="query"></sort-by>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>