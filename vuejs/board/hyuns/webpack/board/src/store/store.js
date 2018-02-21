import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '../store/mutations';

Vue.use(Vuex);
//=======vuex store start===========
const store = new Vuex.Store({
    state: {
        left_open: true,
        right_open: false,
        preloader: true,
        user: {
            name: "Addison",
            picture: "src/assets/img/authors/avatar1.jpg",
            job: "Project Manager"
        }
    },
    mutations
});
//=======vuex store end===========
export default store
