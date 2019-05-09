// src\Search\script.js

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
      }
    },

    methods: {
      onSubmit(event) {
        if (this.query && this.query !== '') {
          bus.$emit('new-query', this.query)
          
        }
      },
      onSortChange(event) {
        bus.$emit('with-sort', event.target.value)
      }
    },
  }