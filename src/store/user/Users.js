import authServices from "../../services/app";

export default {
  mutations: {
    saveUserData() {
      console.log("Done");
    }
  },
  actions: {
    USERS({ commit }, id) {
      return new Promise((resolve, reject) => {
        authServices
          .Users(id)
          .then(res => {
            commit("saveUserData");
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
