import Vue from "vue";
import Vuex from "vuex";
import Snackbar from './modules/snackbar';
import UserData from './modules/userdata';




Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Snackbar,
    UserData
  }
});
