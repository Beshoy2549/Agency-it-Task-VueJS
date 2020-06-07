import authServices from "../../services/app";

export default {
  mutations: {
    saveUserData() {
      console.log("Done");
    }
  },
  actions: {
    SINGLEUSER({ commit }, id) {
      return new Promise((resolve, reject) => {
        authServices
          .singleUser(id)
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
