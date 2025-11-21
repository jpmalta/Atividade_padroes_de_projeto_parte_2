class Media {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }

  info() {
    return `${this.title} (${this.year})`;
  }
}

module.exports = Media;