import { Parser } from "./Parser";
import { Player } from "./Player";

describe("Parser", () => {
  test("parse input", () => {
    const parser = new Parser();
    const players = parser.parse("Black: 1 2 3 4  White: 2 3 4 5");
    expect(players).toEqual([new Player("Black"), new Player("White")]);
  });
});
