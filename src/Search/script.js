// src\Search\script.js
import Vue from 'vue';
import bus from '../bus';
import SortBy from '../SortBy/index.vue';

export default {
    name: 'Search',

    components: {
      'sort-by': SortBy,
    },

    data() {
      return {
        query: '',
        searched: false
      }
    },

    methods: {
      onSubmit(event) {
        if (this.query && this.query !== '') {
          bus.$emit('new-query', this.query)
          this.searched = true;
        }
      },
      onSortChange(event) {
        bus.$emit('with-sort', event.target.value)
      }
    },
  }