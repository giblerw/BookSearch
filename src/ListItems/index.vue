<!-- src\ListItems\index.vue -->

<template>
  <div v-if="data">
    <dl id="book-list">      
      <div v-for="(book, index) in data.items" v-bind:key="book.id">
        <hr />
        <!-- Title Bar -->
        <dt class="book-title">{{ index }}. <u>{{ book.volumeInfo.title }}</u></dt>
        <!-- Body -->
        <dd class="row book-data-content">
          <!-- Book Cover Image -->
          <div class="col-lg-2 book-cover-img">
            <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="book-cover-img" />
          </div> 
          <!-- Authors -->
          <div class="col-lg-2">
            <dt>Author(s):</dt>
            <div class="book-authors" v-if="book.volumeInfo.authors"> <dd v-for="author in book.volumeInfo.authors" v-bind:key="author.id">{{ author }}</dd></div>
            <dd class="book-authors" v-else> N/A</dd>
          </div>
          <!-- Description -->
          <div class="col-lg-8 book-description">
            <dt>Book Summary:</dt>
            <dd id="book-description" v-if="book.volumeInfo.description"> {{ book.volumeInfo.description }}</dd>
            <dd v-else> N/A</dd>
          </div>          
        </dd>
      </div>
    </dl>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>