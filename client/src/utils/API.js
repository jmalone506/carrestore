import axios from "axios";

export default {
  // Gets all books
  getCars: function() {
    return axios.get("/api/cars");
  },
  // Gets the book with the given id
  getCar: function(id) {
    return axios.get("/api/cars/" + id);
  },
  // Deletes the book with the given id
  deleteCar: function(id) {
    return axios.delete("/api/cars/" + id);
  },
  // Saves a book to the database
  saveCar: function(carData) {
    return axios.post("/api/cars", carData);
  },
  saveUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  }
};

