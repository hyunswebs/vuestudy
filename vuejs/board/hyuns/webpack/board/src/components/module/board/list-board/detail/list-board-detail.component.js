export default {
  name: 'list-board-detail',
  components: {},
  props: {

    row: {
      required: true
    },
    columns: {
      required: true
    },
    viewType : {
      required : true
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    rowDataManager : function(){
      this.$emit("row_manager");
    },
    cancel : function(){
      this.$emit("cancel");
    }
  }
}
