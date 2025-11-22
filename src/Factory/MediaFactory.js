const Movie = require("./model/movie.js");
const Music = require("./model/music.js");
const Book = require("./model/book.js");

class MediaFactory {
  static create(type, title, year) {
    switch (type) {
      case "movie": return new Movie(title, year);
      case "music": return new Music(title, year);
      case "book": return new Book(title, year);
      default:
        throw new Error("Tipo de mídia inválido.");
    }
  }
}

module.exports = MediaFactory;
