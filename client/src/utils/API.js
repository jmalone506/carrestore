import axios from "axios";

const API = {

  getNotes: function () {
    return axios.get("/api/notes");
  },
  // Gets the book with the given id
  getNote: function (id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the book with the given id
  deleteNote: function (id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a book to the database
  saveNote: function (noteData) {
    return axios.post("/api/notes", noteData);
  },
  
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