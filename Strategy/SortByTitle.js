const SortStrategy = require("./SortStrategy");

class SortByTitle extends SortStrategy {
  sort(list) {
    return [...list].sort((a, b) => a.title.localeCompare(b.title));
  }
}

module.exports = SortByTitle;
