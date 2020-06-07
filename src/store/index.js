import Vue from "vue";
import Vuex from "vuex";
import login from "./auth/login";
import Users from "./user/Users";
import SingleUser from "./user/SingleUSer";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { login, SingleUser, Users }
});
