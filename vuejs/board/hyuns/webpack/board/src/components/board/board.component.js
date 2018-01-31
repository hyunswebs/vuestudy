import 'bootstrap/dist/css/bootstrap.css';
import BoardComponent from './table/index.vue';
export default {
  name: 'board',
  components: {'table-module':BoardComponent},
  props: [],
  data () {
    return {
      items : [
        {no : 1,title:'제목1' ,content : '제목 1 내용 ~~~', nick : '홍길동'},
        {no : 2,title:'제목2' ,content : '제목 2 내용 ~~~', nick : '홍길동'},
        {no : 3,title:'제목3' ,content : '제목 3 내용 ~~~', nick : '홍길동'}
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
