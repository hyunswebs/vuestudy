import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/store";
Vue.use(Router)
var routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/layout/default_layout/index.vue'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['../components/pages/index/index.vue'], resolve),
          meta: {
            title: 'Dashboard',
            breadcrumb: [{
              text: '<i class="ti-home"></i> Dashboard 1',
              href: '/',
            }]
          }
        }, {
          path: 'list-tables',
          component: resolve => require(['../components/pages/list_tables/index.vue'], resolve),
          meta: {
            title: 'ListTables',
            breadcrumb: [{
              text: '<i class="ti-home"></i> Dashboard',
              href: '/',
            }, {
              text: '게시판',
              href: '#',
            }, {
              text: 'List Tables',
              href: '/list-tables'
            }]
          }
        }, {
          path: 'gallery-tables',
          component: resolve => require(['../components/pages/gallery_tables/index.vue'], resolve),
          meta: {
            title: 'GalleryTables',
            breadcrumb: [{
              text: '<i class="ti-home"></i> Dashboard',
              href: '/',
            }, {
              text: '게시판',
              href: '#',
            }, {
              text: 'Gallery Tables',
              href: '/gallery-tables'
            }]
          }
        }
      ]
    }

  ]
})
routers.beforeEach((to, from, next) => {
  store.commit("routeChange", "start");
  next();
})
routers.afterEach((to, from) => {
  document.title = to.meta.title;
  store.commit("routeChange", "end");
})
export default routers
