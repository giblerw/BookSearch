// src\List\script.js

import Vue from 'vue';
import bus from '../bus';
import config from '../config';
import ListItems from '../ListItems/index.vue';

export default {
  name: 'List',

  components: {
    'list-items': ListItems,
  },

  data() {
    return {
      currentQuery: 'default',
      listData: {
        'default' : {
          items:[],
          kind: '',
          totalItems: 0
        }
      },
      activeSort: 'relevance',
    }
  },

  methods: {
    onQueryChange(query) {
        this.currentQuery = query        
        this.fetchListData(query)
    },
    onSortChange(sort) {
        this.activeSort = sort
        console.log(activeSort)
      },
      
    fetchListData(query) {
        // if we have data already, don't request again
        // if (this.listData.hasOwnProperty(query)) return

        const url = config.BASE_URL + `?q=${query}` + `?orderBy=${this.activeSort}`;
        fetch(url)
          .then(r => r.json())
          .then(data => {
            Vue.set(this.listData, query, data)
          })
      }
  },
  
  created() {    
    bus.$on('new-query', this.onQueryChange)  
    // bus.$on('with-sort', this.onSortChange)  
  },

  destroyed() {
    bus.$off('new-query', this.onQueryChange)
    // bus.$off('with-sort', this.onSortChange)
  }
}