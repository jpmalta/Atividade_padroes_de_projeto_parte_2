const Media = require("./media.js");

class Book extends Media {
  constructor(title, year) {
    super(title, year);
  }
}

module.exports = Book;
