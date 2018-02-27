import anime from 'animejs'
export default {
  name: 'sub-menu',
  components: {},
  props: {
    selected: Boolean,
    icon: String,
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isActived: this.selected
    }
  },
  computed: {
    index() {
      return this.$parent.$collapseItems.indexOf(this)
    }
  },
  created() {
    this._isCollapseItem = true
  },
  mounted() {
    function activate(self) {
      if (self.$refs.box) {
        self.isActived = self.$refs.box.querySelectorAll("a.active").length >= 1 ? true : false;
      }
    }
    //change when route changes
    this.$store.subscribe((mutation, state) => {
      if (mutation.type == "routeChange" && mutation.payload == "end") {
        setTimeout(() => {
          activate(this);
        }, 0);
      }
    });
    activate(this);
  },
  methods: {
    toggle() {
      this.$parent.$emit('closeall', this.index)
      this.isActived = !this.isActived
    },
    cancel() {
      this.anime.pause()
    },
    before(targets) {
      targets.removeAttribute('style')
    },
    enter(targets, done) {
      const height = targets.scrollHeight
      targets.style.height = 0
      targets.style.opacity = 0
      anime({
        targets: targets,
        duration: 377,
        easing: 'easeOutExpo',
        opacity: [0, 1],
        height: height,
        complete() {
          targets.removeAttribute('style')
          done()
        }
      });
    },
    leave(targets, complete) {
      anime({
        targets: targets,
        duration: 377,
        easing: 'easeOutExpo',
        opacity: [1, 0],
        height: 0
      });
    }
  }
}
