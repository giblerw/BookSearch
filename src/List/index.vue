<!-- src\List\index.vue -->

<template>
  <div class="list-prompt">
    <p id="search-propmt" v-if="currentQuery == 'default'">
      Submit a search above to get Book data.
    </p>
    <div v-if="totalItems !== 0">
      <h6 id="result-propmt">Search found <b>{{ listData[currentQuery].totalItems }}</b> results for: <em><b id="query-read">{{ currentQuery }}</b></em></h6>
      <list-items :data="listData[currentQuery]" id="list-container"></list-items>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>