import Api from "./axios";

export default {
  login(form) {
    return Api().post("login", form);
  }
};
