const Media = require("./media.js");

class Movie extends Media {
  constructor(title, year) {
    super(title, year);
  }
}

module.exports = Movie;
