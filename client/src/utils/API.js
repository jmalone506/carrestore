import axios from "axios";

const API = {

  getList: function (query) {
    return axios.get("/accessorize", { params: { q: query } })
  },

  getUser: function (userData) {
    return axios.post("/login", userData)
  },

  saveUser: function (userData) {
    return axios.post("/api/users/signup", userData);
  }
};

export default API;