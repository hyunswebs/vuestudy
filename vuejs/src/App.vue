<template>
  <board-basic v-bind:list="board"></board-basic>  
</template>

<script>
//Models
import BoardModel from './models/BoardModel.js'

//BoardBasic template
import BoardBasic from './components/BoardBasic.vue'

export default {
  name: 'app',
  data () {
    return {
      board: []
    }
  },
  components: {
    'board-basic' : BoardBasic
  },
  created() {
    this.fetchBoard();
  },
  methods: {
    fetchBoard() {
      BoardModel.list().then(data => {
        this.board = data;
      })
    }
  }
}
</script>
<style lang="scss">
   @import './assets/css/layout.scss'
</style>