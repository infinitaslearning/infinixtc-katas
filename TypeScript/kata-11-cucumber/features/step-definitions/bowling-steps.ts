import assert from "node:assert/strict";
import { Given, When, Then } from "@cucumber/cucumber";
import { game } from "../../src/bowling";

Given("a new game", function () {
	this.game = game();
});

Given("{int} gutter roll(s)", function (rolls: number) {
	for (let i = 0; i < rolls; ++i) {
		this.game.roll(0);
	}
});

Given("{int} roll(s) of {int} pin(s)", function (rolls: number, pins: number) {
	for (let i = 0; i < rolls; ++i) {
		this.game.roll(pins);
	}
});

When("I score the game", function () {
	this.score = this.game.getScore();
});

Then("the score should be {int}", function (score: number) {
	assert.strictEqual(this.score, score);
});
