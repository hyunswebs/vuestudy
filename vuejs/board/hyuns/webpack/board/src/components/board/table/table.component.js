import Vue from 'vue'

export default {
  name: 'table-module',
  components: {},
  props: [
    'items'
  ],
  data () {
    return {
      viewType : 'list',
      selectedArticle : {},
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    detail: function (article) {
      this.viewType = 'detail';
      this.selectedArticle = article;
    },
    modify : function(article){
      Vue.set(this.items, article.no - 1, article);
      this.changeViewType('list');
    },
    changeViewType : function(viewType){
      this.viewType = viewType;
      if(viewType === 'list'){this.selectedArticle = {} };
    }
  }
}
