import { Game } from "./Game";

describe("Game", () => {
  const game = new Game();

  function resultShouldBe(input: string, expected: string) {
    expect(game.showResult(input)).toEqual(expected);
  }

  test("no point tie no point", () => {
    resultShouldBe("Black: 1 2 3 4  White: 2 3 4 5", "Tie.");
    resultShouldBe("Black: 2 2 2 4  White: 3 3 3 5", "Tie.");
  });
});
