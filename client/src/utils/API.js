import axios from "axios";

export default {

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

  getUser: function (id) {
    return axios.get("/api/users/login" + id)
  },

  saveUser: function (userData) {
    return axios.post("/api/users/signup", userData);
  }
};

