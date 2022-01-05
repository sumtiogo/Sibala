import { Game } from "./Game";

test("no point tie no point", () => {
  expect(Game.showResult("Black: 1 2 3 4  White: 2 3 4 5")).toEqual("Tie.");
  expect(Game.showResult("Black: 2 2 2 4  White: 3 3 3 5")).toEqual("Tie.");
});
