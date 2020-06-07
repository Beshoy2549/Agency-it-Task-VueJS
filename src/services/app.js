import Api from "./axios";
export default {
  singleUser(id) {
    return Api().get("users/" + id);
  },
  Users(id) {
    return Api().get("users?page=" + id);
  }
};
