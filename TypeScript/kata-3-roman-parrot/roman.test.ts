import { roman } from "./roman";

describe("roman converter", () => {
  it("converts 1 to I", () => {
    expect(roman(1)).toEqual("I");
  });
});
