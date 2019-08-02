import axios from "axios";

export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+query+"+inauthor:keyes&key=AIzaSyD1iKCV3PUaH0lUBjnRZslCxz9TvZ6ori8");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
