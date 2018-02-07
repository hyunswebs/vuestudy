
export default {
  name: 'pagenation',
  components: {},
  props: {
    records: {
      type: Number,
      required: true
    },
    perPage : {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentPage : 1,
      currentPages : {}
    }
  },
  computed: {
    TotalPages: function() {
      return parseInt(this.records / this.perPage) + 1;
    }
  },
  mounted () {

  },
  methods: {
    selectedItems : function(){
    console.log('zz')
  }

}
}
