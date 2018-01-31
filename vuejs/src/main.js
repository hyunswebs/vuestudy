import Vue from 'vue'
import App from './App.vue'
import View from './View.vue'

const NotFound = { template: '<p>Page not found</p>' }
const Home = App
const BoardView = View

const routes = {
  '/': Home,
  '/BoardView': BoardView
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
