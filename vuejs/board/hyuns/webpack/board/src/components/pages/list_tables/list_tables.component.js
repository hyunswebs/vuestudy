import Vue from 'vue';
import listBoard from '../../module/board/list-board/index.vue'
import {
  ClientTable,
  Event
} from 'vue-tables-2';
import axios from 'axios';
Vue.use(ClientTable, {}, false);
export default {
  name: 'list-tables',
  components: {listBoard},
  props: [],
  data() {
    return {
      rowdata: [],

      columndata: [ // Array of objects
        {
          label: '제목', // Column name
          field: 'subject', // Field name from row
          numeric: false, // Affects sorting
          width: "400px", //width of the column
          html: false, // Escapes output if false.
        }, {
          label: '글쓴이',
          field: 'writer',
          numeric: false,
          html: false,
        }, {
          label: '조회수',
          field: 'viewCnt',
          numeric: true,
          width:"100px",
          html: false,
        }
      ]
    }
  },
  beforeCreate(){
    var vm = this;
    axios.get('http://local-study.com/vuejs/board/list')
    .then(function (response) {
      vm.rowdata = response.data;
    })
    .catch(function (error) {
      vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
    })
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
      deleteData : function(row,index){
        var vm = this;
        axios.post('http://local-study.com/vuejs/board/delete',row)
          .then(function (response) {
            console.log(response);
            vm.rowdata.splice(vm.rowdata.indexOf(row),1);
          })
          .catch(function (error) {
            vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
          })
      }
  }
}
