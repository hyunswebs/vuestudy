import Fuse from 'fuse.js';
export default {
  name: 'list-board',
  components: {},
  props: {
    title: {
      default: ""
    },
    columns: {
      required: true
    },
    rows: {
      required: true
    },
    perPage: {
      default: 10
    },
    sortable: {
      default: true
    },
    paginate: {
      default: true
    },
    exportable: {
      default: true
    },
    pagelen: {
      type: Array,
      default () {
        return [5, 10, 20, 50]
      }
    }
  },

  data() {
    return {
      currentPage: 1,
      currentPerPage: this.perPage,
      pagingPerCnt : 10,
      sortColumn: -1,
      sortType: 'asc',
      searchInput: '',
      isNextPage : false,
      isBigNextPage : false,
      isPrevPage : false,
      isBigPrevPage : false,
      pageStartNum : 0,
      pageLastNum : 0,
      lastPage : 0,
      pageNation : []
    }
  },
  mounted() {
    this.sort(0);
  },
  methods: {
    isCurrentPage(value){
      return this.currentPage == value;
    },
    nextPage() {
      if (this.processedRows.length > this.currentPerPage * this.currentPage && this.currentPerPage != -1)
        ++this.currentPage;
    },
    moveCurrentPage(value){
      if (this.currentPage > 0)
        this.currentPage = value;
    },
    sort(index) {
      if (!this.sortable) {
        return;
      }
      if (this.sortColumn === index) {
        this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortType = 'asc';
        this.sortColumn = index;
      }
    },

    click(row, index) {
      this.$emit("rowClick", row, index);
    },

    exportExcel() {
      const mimeType = 'data:application/vnd.ms-excel';
      const html = this.renderTable().replace(/ /g, '%20');

      const d = new Date();

      var dummy = document.createElement('a');
      dummy.href = mimeType + ', ' + html;
      dummy.download = this.title.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() + '.xls';
      dummy.click();
    },

    renderTable() {
      var table = '<table><thead>';

      table += '<tr>';
      for (var i = 0; i < this.columns.length; i++) {
        const column = this.columns[i];
        table += '<th>';
        table += column.label;
        table += '</th>';
      }
      table += '</tr>';

      table += '</thead><tbody>';

      for (var i = 0; i < this.rows.length; i++) {
        const row = this.rows[i];
        table += '<tr>';
        for (var j = 0; j < this.columns.length; j++) {
          const column = this.columns[j];
          table += '<td>';
          table += this.collect(row, column.field);
          table += '</td>';
        }
        table += '</tr>';
      }

      table += '</tbody></table>';

      return table;
    },

    dig(obj, selector) {
      var result = obj;
      const splitter = selector.split('.');
      for (let i = 0; i < splitter.length; i++)
        if (typeof(result) === 'undefined')
          return undefined;
        else
          result = result[splitter[i]];
      return result;
    },

    collect(obj, field) {
      if (typeof(field) === 'function')
        return field(obj);
      else if (typeof(field) === 'string')
        return this.dig(obj, field);
      else
        return undefined;
    },
    deleteDataFnc(data,index){
      this.$emit("delete_data", data,index);
    },
    modifyViewFnc(data){
      this.$emit("modify_view", data);
    }
  },

  computed: {
    processedRows: function() {
      var computedRows = this.rows;

      if (this.sortable !== false) {
        computedRows = computedRows.sort((x, y) => {
          if (!this.columns[this.sortColumn]) {
            return 0;
          }

          const cook = (x) => {
            x = this.collect(x, this.columns[this.sortColumn].field);
            if (typeof(x) === 'string') {
              x = x.toLowerCase();
              if (this.columns[this.sortColumn].numeric)
                x = x.indexOf('.') >= 0 ? parseFloat(x) : parseInt(x);
            }
            return x;
          }

          x = cook(x);
          y = cook(y);

          return (x < y ? -1 : (x > y ? 1 : 0)) * (this.sortType === 'desc' ? -1 : 1);
        })
      }

      if (this.searchInput) {
        computedRows = (new Fuse(computedRows, {
          keys: this.columns.map(c => c.field)
        })).search(this.searchInput);
      }
      this.setPageNation;

      return computedRows;
    },
    setPageNation : function(){
      this.pageNation = [];
      this.lastPage = parseInt(this.rows.length / this.currentPerPage + 1);

      this.isPrevPage = this.currentPage - 1 < 1 ? true : false;
      this.isBigPrevPage = this.currentPage - this.currentPerPage < 1 ? true : false;

      this.isNextPage = this.currentPage + 1 > this.lastPage ? true : false;
      this.isBigNextPage = this.currentPage + this.currentPerPage > this.lastPage ? true : false;

      this.pageLastNum = (this.currentPage + this.pagingPerCnt) >  this.lastPage ?  this.lastPage : (this.currentPage + this.pagingPerCnt)-1;
      this.pageStartNum = (this.pageLastNum - this.pagingPerCnt) <= 0 ? 1 : (this.pageLastNum - this.pagingPerCnt)

      for(var i = this.pageStartNum ; i <= this.pageLastNum ; i++){
        this.pageNation[this.pageNation.length] = i;
      }
    },
    paginated: function() {
      var paginatedRows = this.processedRows;

      if (this.paginate && this.currentPerPage != -1) {
        paginatedRows = paginatedRows.slice((this.currentPage - 1) * this.currentPerPage, this.currentPage * this.currentPerPage);
      }
      return paginatedRows;
    }
  },
  watch: {
    currentPerPage() {
      this.currentPage = 1;
      this.paginated;
    },
    searchInput(){
      this.currentPage = 1;
      this.paginated;
    }
  }
}
