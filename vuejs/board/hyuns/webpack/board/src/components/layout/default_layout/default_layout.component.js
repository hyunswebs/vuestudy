
import normal_header from "../normal_header/index.vue";
import left_side from "../left-side/default/index.vue";
import right_side from "../right-side/index.vue";
export default {
  name: 'default-layout',
  components: {normal_header, left_side,right_side},
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
    right_close() {
      this.$store.commit('rightside_bar', "close");
    }
  }
}
