import { example } from "./example";

describe("Example", () => {
  it("is a passing test just to make sure everything works", () => {
    expect(example()).toEqual("it works!");
  });
});
