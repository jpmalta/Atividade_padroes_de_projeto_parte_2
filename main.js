import MediaFactory from "./Factory/MediaFactory";
import RatingDecorator from "./decorator/RatingDecorator";
import SortByTitle from "./strategy/SortByTitle";
import SortByYear from "./strategy/SortByYear";
import ObservableCollection from "./Observer/ObservableCollection";
import LoggerObserver from "./Observer/LoggerObserver";

const collection = new ObservableCollection();
collection.addObserver(new LoggerObserver());

const items = [
  MediaFactory.create("movie", "Matrix", 1999),
  MediaFactory.create("music", "Bohemian Rhapsody", 1975),
  MediaFactory.create("book", "Duna", 1965)
];

collection.add(items[0]);
collection.add(items[1]);

const rated = new RatingDecorator(items[0], 9);
console.log(rated.info());

console.log("\nOrdenado por título:");
console.log(new SortByTitle().sort(collection.list()).map(i => i.info()));

console.log("\nOrdenado por ano:");
console.log(new SortByYear().sort(collection.list()).map(i => i.info()));
