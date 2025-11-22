import MediaDecorator from "../src/model/Mediadecorator.js";

class RatingDecorator extends MediaDecorator {
  constructor(media, rating) {
    super(media);
    this.rating = rating;
  }

  info() {
    return `${super.info()} - Nota: ${this.rating}/10`;
  }
}

export default RatingDecorator;
