const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

// FRIDAY
function isItFriday(today) {
    return today === 'Friday' ? 'TGIF' : 'Nope';
}

Given('today is {string}', function (day) {
    this.today = day;
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});
