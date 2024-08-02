class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.ua = Math.ceil((this.max + this.min) / 2));
  }

  lower() {
    this.max = this.ua;
  }

  greater() {
    this.min = this.ua;
  }
}

module.exports = GuessingGame;
