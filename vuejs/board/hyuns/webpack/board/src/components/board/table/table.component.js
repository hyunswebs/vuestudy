import Vue from 'vue'
import PaginationComponent from './pagenation/index.vue';

export default {
  name: 'table-module',
  components: {'paging-module': PaginationComponent},
  props: {
    items :{
      type:Array,
      required:true
    },
    boardType: {
      type:String,
      required:true
    },
    paging: {
      type:Boolean,
      required:true
    },
    pagingType: {
      type:String,
      required:false
    },
    perPage: {
      type:Number,
      required:false
    },
    nextPage: {
      type:Boolean,
      required:false
    },
    bigNextPage: {
      type:Boolean,
      required:false
    },
    prevPage: {
      type:Boolean,
      required:false
    },
    bigPrevPage: {
      type:Boolean,
      required:false
    }
  },
  data () {
    return {
      viewType : 'list',
      selectedArticle : {}
    }
  },
  computed: {

  },
  mounted () {
    //validation
    var _this = this;
    if(_this.paging){
      if(_this.pagingType === null || _this.pagingType === undefined || _this.pagingType === ''){
        console.error("paging 값이 'true' 일 경우 paingType값은 필수 값 입니다.");
      }
      if(_this.pagingType === null || _this.pagingType === undefined || _this.pagingType === ''){
        console.error("paging 값이 'true' 일 경우 perPage값은 필수 값 입니다.");
      }
    }
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
