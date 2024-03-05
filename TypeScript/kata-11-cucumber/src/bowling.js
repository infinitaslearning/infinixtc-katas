module.exports = () => {
  let score = 0;
  return {
    roll(pins) {
      score += pins
    },
    getScore() {
        return score;
    }
  }
};
