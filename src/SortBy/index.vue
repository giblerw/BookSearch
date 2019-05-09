<!-- src/SortBy/index.vue -->

<template>
    <span v-if="query" id="sort-button-group">
        <span>Sort By: </span>
        <button class='relevant-sort-btn active' v-on:click.prevent="sortBy" value="relevance">
            Relevance
        </button>
        <button disabled class='newest-sort-btn' v-on:click.prevent="sortBy" value='newest'>
            Newest
        </button>
    </span>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>