function GuessingGame() {
  return {
    setRange: (min, max) => ((u = min), (a = max)),
    guess: () => (ua = Math.ceil((u + a) / 2)),
    greater: () => (u = ua),
    lower: () => (a = ua),
  };
}

module.exports = GuessingGame;
