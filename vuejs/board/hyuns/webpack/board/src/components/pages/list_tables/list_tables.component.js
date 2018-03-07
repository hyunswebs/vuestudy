import Vue from 'vue';
import listBoard from '../../module/board/list-board/index.vue'
import listBoardDetail from '../../module/board/list-board/detail/index.vue'
import {
  ClientTable,
  Event
} from 'vue-tables-2';
import axios from 'axios';
Vue.use(ClientTable, {}, false);
export default {
  name: 'list-tables',
  components: {listBoard,listBoardDetail},
  props: [],
  data() {
    return {
      viewType : 'list',
      rowdata: [],
      currentData : {},
      columndata: [ // Array of objects
        {
          label: '제목', // Column name
          field: 'subject', // Field name from row
          numeric: false, // Affects sorting
          width: "400px", //width of the column
          html: false, // Escapes output if false.
          editable : true,
          listView : true
        }, {
          label: '글쓴이',
          field: 'writer',
          numeric: false,
          html: false, // Escapes output if false.
          editable : true,
          listView : true
        }, {
          label: '글내용',
          field: 'article',
          numeric: false,
          html: false, // Escapes output if false.
          editable : true,
          listView : false
        }, {
          label: '조회수',
          field: 'viewCnt',
          numeric: true,
          width:"100px",
          html: false, // Escapes output if false.
          editable : false,
          listView : true
        }
      ]
    }
  },
  beforeCreate(){
    var vm = this;
    vm.rowList();
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
      },
    modifyView : function(row){
      var vm = this;
      vm.currentData = row;
      vm.viewType = 'modify'
    },
    rowManager : function(){
      var vm = this;
      var data = vm.currentData;
      if(vm.viewType == 'modify'){
        axios.post('http://local-study.com/vuejs/board/modify',data)
          .then(function (response) {
            console.log(response);
            Vue.set(vm.rowdata, data, vm.rowdata.indexOf(data));
            vm.viewType = 'list';
            vm.currentData = [];
          })
          .catch(function (error) {
            vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
          })
      }
      if(vm.viewType == 'register'){
        if(data.subject == null || data.subject == undefined  || data.subject == ''){
          alert("제목을 입력하세요");return false;
        }
        if(data.writer == null || data.writer == undefined  || data.writer == ''){
          alert("글쓴이를 입력하세요");return false;
        }

        if(data.article == null || data.article == undefined  || data.article == ''){
          alert("글내요을 입력하세요");return false;
        }
        axios.post('http://local-study.com/vuejs/board/save',data)
          .then(function (response) {
            vm.viewType = 'list';
            vm.currentData = [];
            vm.rowList();
          })
          .catch(function (error) {
            vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
          })
      }

    },
    cancel : function(){
      var vm = this;
      vm.viewType = 'list';
      vm.currentData = [];
    },
    viewRegister : function(){
      var vm = this;
      vm.viewType = 'register';
    },
    rowList : function(){
      var vm = this;
      axios.get('http://local-study.com/vuejs/board/list')
        .then(function (response) {
          vm.rowdata = response.data;
        })
        .catch(function (error) {
          vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
        })
    }
  }
}
