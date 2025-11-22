class ObservableCollection {
  constructor() {
    this.observers = [];
    this.items = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyAll(item) {
    this.observers.forEach(o => o.update(item));
  }

  add(item) {
    this.items.push(item);
    this.notifyAll(item);
  }

  list() {
    return this.items;
  }
}

export default ObservableCollection;