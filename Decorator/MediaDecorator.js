class MediaDecorator {
  constructor(media) {
    this.media = media;
  }

  info() {
    return this.media.info();
  }
}

module.exports = MediaDecorator;
