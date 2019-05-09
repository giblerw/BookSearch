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
      currentQuery: null,
      listData: {},
    }
  },

  methods: {
    onQueryChange(query) {
        this.currentQuery = query
        this.fetchListData(query)
    },
    fetchListData(query) {
        // if we have data already, don't request again
        if (this.listData.hasOwnProperty(query)) return

        const url = config.BASE_URL + `?q=${query}`;
        fetch(url)
          .then(r => r.json())
          .then(data => {
            Vue.set(this.listData, query, data)
          })
      }
  },

  created() {
    bus.$on('new-query', this.onQueryChange)
  },

  destroyed() {
    bus.$off('new-query', this.onQueryChange)
  }
}