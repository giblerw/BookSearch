<!-- src\List\index.vue -->

<template>
  <div>
    <p v-if="currentQuery == null">
      Submit a search above to see Book data.
    </p>
    <p v-else>
      Found <b>{{ listData[currentQuery].totalItems }}</b> results for <b>{{ currentQuery }}</b>:
      <list-items :data="listData[currentQuery]"></list-items>
    </p>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>