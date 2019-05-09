<!-- src\App\index.vue -->

<template>
  <div>
    <header class="row" id="app-header" >      
      <h3 class="col-sm-3" id="app-title" >Bookz</h3>
      <search class="col-sm-9" id="search-bar" ></search>
    </header>
    <div id="list-container">      
      <list></list>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>