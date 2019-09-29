class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.result = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.result = this.min + Math.round((this.max - this.min) / 2));
  }

  lower() {
    this.max = this.result;
  }

  greater() {
    this.min = this.result;
  }
}

module.exports = GuessingGame;
