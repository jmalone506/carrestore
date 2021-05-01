import axios from "axios";

const API = {

  getList: function (query) {
    return axios.get("/accessorize", { params: { q: query } })
  },

  getBuyCard: function () {
    return axios.get("/buy");
  },

  saveBuyCard: function (query) {
    return axios.post("/history", { params: { q: query } });
  },

  getUser: function (userData) {
    return axios.post("/login", userData)
  },

  saveUser: function (userData) {
    return axios.post("/api/users/signup", userData);
  }
};

export default API;