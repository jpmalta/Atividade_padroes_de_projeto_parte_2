const Media = require("./media.js");

class Music extends Media {
  constructor(title, year) {
    super(title, year);
  }
}

module.exports = Music;
