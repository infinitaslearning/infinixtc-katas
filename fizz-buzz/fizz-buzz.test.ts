import { fizzBuzz } from "./fizz-buzz";

describe("Fizz Buzz", () => {
  it("is a passing test just to make sure everything works", () => {
    expect(fizzBuzz()).toEqual("it works!");
  });
});
