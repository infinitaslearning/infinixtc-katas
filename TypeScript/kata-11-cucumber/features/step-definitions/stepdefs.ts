import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

// FRIDAY
function isItFriday(today: string): string {
	return today === "Friday" ? "TGIF" : "Nope";
}

Given("today is {string}", function (day: string) {
	this.today = day;
});

When("I ask whether it's Friday yet", function () {
	this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
	assert.strictEqual(this.actualAnswer, expectedAnswer);
});
