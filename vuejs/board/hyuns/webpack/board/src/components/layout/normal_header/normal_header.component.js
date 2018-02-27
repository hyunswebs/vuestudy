export default {
  name: 'normal_header',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    //Enable sidebar toggle
    toggle_left() {
      this.$store.commit('left_menu', "toggle");
    },
    toggle_right() {
      this.$store.commit('rightside_bar', "toggle");
    }
  }
}
