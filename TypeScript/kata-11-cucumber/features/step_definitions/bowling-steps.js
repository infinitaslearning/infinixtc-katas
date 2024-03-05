const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
const game = require('../../src/bowling')

Given('a new game', function () {
    this.game = game();
  });

Given('{int} gutter roll(s)', function (rolls) {
  for(let i = 0; i < rolls; ++i) {
    this.game.roll(0);
  }
});

Given('{int} rolls of {int} pin(s)', function (rolls, pins) {
  for(let i = 0; i < rolls; ++i) {
    this.game.roll(pins);
  }
});

When('I score the game', function () {
  this.score = this.game.getScore();
});

Then('the score should be {int}', function (score) {
  assert.strictEqual(this.score, score)
});
