// src\Search\script.js

import bus from '../bus';

export default {
    name: 'Search',

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
      }
    },
  }