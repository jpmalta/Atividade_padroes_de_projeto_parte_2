const SortStrategy = require("./SortStrategy");

class SortByYear extends SortStrategy {
  sort(list) {
    return [...list].sort((a, b) => a.year - b.year);
  }
}

export default SortByYear;