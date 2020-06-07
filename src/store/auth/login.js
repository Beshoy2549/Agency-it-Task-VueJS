import authServices from "../../services/auth";

export default {
  state: {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    isUserLoggedIn: () => {
      return localStorage.getItem("token") ? true : false;
    }
  },
  mutations: {
    saveUserData(state, token) {
      state.token = token;
    }
  },
  actions: {
    LOGIN({ commit }, form) {
      return new Promise((resolve, reject) => {
        authServices
          .login(form)
          .then(res => {
            commit("saveUserData", res.data.token);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
