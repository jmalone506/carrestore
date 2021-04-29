import axios from "axios";

const API = {

  getList: function(query) {
    return axios.get("/accessorize", { params: { q: query }})
  },

  getCars: function () {
    return axios.get("/api/cars");
  },

  getCar: function (id) {
    return axios.get("/api/cars/" + id);
  },

  deleteCar: function (id) {
    return axios.delete("/api/cars/" + id);
  },

  saveCar: function (carData) {
    return axios.post("/api/cars", carData);
  },

  getUser: function (userData) {
    return axios.post("/login", userData)
  },

  saveUser: function (userData) {
    return axios.post("/api/users/signup", userData);
  }
};

export default API;