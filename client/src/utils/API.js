import axios from "axios";

const API = {

  // Gets all posts
  getPosts: function () {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/api/posts", postData);
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