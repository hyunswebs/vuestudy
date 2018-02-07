import Vue from 'vue'
import BoardComponent from './table/index.vue';
export default {
  name: 'board',
  components: {'table-module':BoardComponent},
  props: [],
  data () {
    return {
      items : [
      ]
    }
  },
  computed: {

  },
  mounted () {
    for(var i= 0 ; i <= 180 ; i++){
      Vue.set(this.items, i, {no : 3,title:'제목3' ,content : '제목 3 내용 ~~~', nick : '홍길동'})
    }
  },
  methods: {
    clickCallback: function(pageNum) {
      console.log(pageNum)
    }
  }
}
